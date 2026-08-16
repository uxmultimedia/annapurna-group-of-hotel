declare module "@cloudflare/workers-types" {
  interface D1Database {
    prepare(query: string): unknown;
    exec(query: string): Promise<unknown>;
    dump(): Promise<ArrayBuffer>;
    batch<T = unknown>(statements: unknown[]): Promise<T[]>;
    prepareAll?(...queries: string[]): unknown[];
  }

  interface Fetcher {
    fetch(requestOrUrl: Request | string, requestInitr?: RequestInit | Request): Promise<Response>;
  }

  type ExportedHandler = unknown;
}

declare module "cloudflare:workers" {
  export function getMiniflareBindings<T = Record<string, unknown>>(): T;

  const env: {
    DB?: import("@cloudflare/workers-types").D1Database;
    ASSETS?: import("@cloudflare/workers-types").Fetcher;
    IMAGES?: {
      input(
        stream: ReadableStream | Blob | ArrayBuffer | string,
      ): {
        transform(options: Record<string, unknown>): {
          output(options: {
            format: string;
            quality: number;
          }): Promise<{ response(): Response }>;
        };
      };
    };
    [key: string]: unknown;
  };
}

declare module "drizzle-orm/d1" {
  import type { DrizzleD1Database } from "drizzle-orm/d1";
  import type * as Drizzle from "drizzle-orm";

  type D1Database = import("@cloudflare/workers-types").D1Database;

  export function drizzle<TSchema extends Record<string, unknown> = Record<string, never>>(
    client: D1Database,
    config?: Drizzle.DrizzleConfig<TSchema>,
  ): DrizzleD1Database<TSchema>;

  export type DrizzleD1Database<TSchema extends Record<string, unknown> = Record<string, never>> =
    Drizzle.BaseSQLiteDatabase<any, TSchema>;
}
