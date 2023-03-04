import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";

interface CreateContextOptions {
  rsc: boolean;
}

/**
 * Inner function for `createContext` where we create the context.
 * This is useful for testing when we don't want to mock Next.js' request/response
 */
export async function createContextInner(opts: CreateContextOptions) {
  return {};
}

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export async function createContext(
  opts: // HACKs because we can't import `next/cookies` in `/api`-routes
  | {
        type: "rsc";
      }
    | (trpcNext.CreateNextContextOptions & { type: "api" })
) {
  // for API-response caching see https://trpc.io/docs/caching

  if (opts.type === "rsc") {
    // RSC
    return {
      type: opts.type,
    };
  }
  // not RSC
  // const session = await unstable_getServerSession(opts.req, opts.res, nextAuthOptions);
  return {
    type: opts.type,
  };
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
