import type { D1Database, Fetcher } from "@cloudflare/workers-types";
import type * as drizzleOrmD1 from "drizzle-orm/d1";
import * as schema from "./schema";

type DrizzleExport = typeof drizzleOrmD1;

interface CloudflareEnv {
  DB?: D1Database;
  ASSETS?: Fetcher;
  IMAGES?: unknown;
  [key: string]: unknown;
}

declare global {
  // eslint-disable-next-line no-var
  var __CLOUDFLARE_ENV_SHIM__: CloudflareEnv | undefined;
}

function shimEnv(): CloudflareEnv {
  if (typeof globalThis !== "undefined" && globalThis.__CLOUDFLARE_ENV_SHIM__) {
    return globalThis.__CLOUDFLARE_ENV_SHIM__;
  }
  return {};
}

async function lazyEnv(): Promise<CloudflareEnv> {
  try {
    const mod = await import("cloudflare:workers");
    if (mod?.env) return mod.env as CloudflareEnv;
  } catch {
    // fall through
  }
  return shimEnv();
}

async function lazyDrizzle(): Promise<DrizzleExport["drizzle"]> {
  try {
    const mod = (await import("drizzle-orm/d1")) as DrizzleExport;
    return mod.drizzle;
  } catch {
    throw new Error(
      "drizzle-orm/d1 is unavailable. Ensure you are deploying with Cloudflare D1 bindings, or avoid importing getDb() outside of Cloudflare Workers runtime.",
    );
  }
}

export async function getDb() {
  const [env, drizzle] = await Promise.all([lazyEnv(), lazyDrizzle()]);
  if (!env.DB) {
    throw new Error(
      "Cloudflare D1 binding `DB` is unavailable. Set the `d1` field in .openai/hosting.json to `DB` or let your control plane inject the real binding values before using the database.",
    );
  }
  return drizzle(env.DB, { schema });
}
