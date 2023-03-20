import type { inferAsyncReturnType } from "@trpc/server";
import type { CreateNextContextOptions } from "@trpc/server/adapters/next";

export const createContext = (opts: CreateNextContextOptions) => ({});

export type Context = inferAsyncReturnType<typeof createContext>;
