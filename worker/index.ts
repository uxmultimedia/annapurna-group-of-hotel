/** Cloudflare Worker entry point for the vinext-starter template. */
import type { D1Database, Fetcher } from "@cloudflare/workers-types";
import { handleImageOptimization, DEFAULT_DEVICE_SIZES, DEFAULT_IMAGE_SIZES } from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";

interface Env {
  ASSETS: Fetcher;
  DB: D1Database;
  IMAGES: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: { format: string; quality: number }): Promise<{ response(): Response }>;
      };
    };
  };
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

// #region debug-point shared:image-fetch-undefined
const reportDebug = (
  hypothesisId: string,
  msg: string,
  data: Record<string, unknown>,
  traceId: string,
): void => {
  void fetch("http://127.0.0.1:7777/event", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      sessionId: "image-fetch-undefined",
      runId: "post-fix",
      hypothesisId,
      location: "worker/index.ts",
      msg: `[DEBUG] ${msg}`,
      data,
      traceId,
      ts: Date.now(),
    }),
  }).catch(() => {});
};
// #endregion

// Image security config. SVG sources with .svg extension auto-skip the
// optimization endpoint on the client side (served directly, no proxy).
// To route SVGs through the optimizer (with security headers), set
// dangerouslyAllowSVG: true in next.config.js and uncomment below:
// const imageConfig: ImageConfig = { dangerouslyAllowSVG: true };

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    const traceId = crypto.randomUUID();
    const hasAssetsBinding = Boolean(env?.ASSETS && "fetch" in env.ASSETS);
    const hasImagesBinding = Boolean(env?.IMAGES && "input" in env.IMAGES);

    // #region debug-point B:request-entry
    reportDebug("B", "worker.fetch entry", {
      pathname: url.pathname,
      method: request.method,
      hasAssetsBinding,
      hasImagesBinding,
    }, traceId);
    // #endregion

    if (url.pathname === "/_vinext/image") {
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];

      // #region debug-point A:image-branch
      reportDebug("A", "image optimization branch entered", {
        search: url.search,
        hasAssetsBinding,
        hasImagesBinding,
      }, traceId);
      // #endregion

      // #region debug-point D:fallback-selection
      reportDebug("D", "image optimization fallback selection", {
        assetSource: hasAssetsBinding ? "assets-binding" : "origin-fetch",
        transformMode: hasImagesBinding ? "cloudflare-images" : "passthrough",
      }, traceId);
      // #endregion

      return handleImageOptimization(request, {
        fetchAsset: (path) => {
          // #region debug-point A:fetch-asset
          reportDebug("A", "fetchAsset invoked", {
            path,
            assetSource: hasAssetsBinding ? "assets-binding" : "origin-fetch",
          }, traceId);
          // #endregion

          return hasAssetsBinding
            ? env.ASSETS.fetch(new Request(new URL(path, request.url)))
            : fetch(new URL(path, request.url));
        },
        transformImage: hasImagesBinding
          ? async (body, { width, format, quality }) => {
              // #region debug-point E:transform-image
              reportDebug("E", "transformImage invoked", {
                width,
                format,
                quality,
                transformMode: "cloudflare-images",
              }, traceId);
              // #endregion

              const result = await env.IMAGES.input(body).transform(width > 0 ? { width } : {}).output({ format, quality });
              return result.response();
            }
          : undefined,
      }, allowedWidths);
    }

    const response = await handler.fetch(request, env, ctx);
    const headers = new Headers(response.headers);
    headers.set("X-Content-Type-Options", "nosniff");
    headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
    headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
    headers.set("X-Frame-Options", "DENY");
    headers.set(
      "Content-Security-Policy",
      "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; media-src 'self'; connect-src 'self'; frame-src https://www.google.com https://maps.google.com; font-src 'self' data:; object-src 'none'; base-uri 'self'; form-action 'self' mailto:; frame-ancestors 'none';",
    );
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};

export default worker;
