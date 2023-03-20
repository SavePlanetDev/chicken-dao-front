import type { inferAsyncReturnType } from "@trpc/server";
import type { CreateNextContextOptions } from "@trpc/server/adapters/next";
import { useAccount } from "wagmi";

export const createContext = (opts: CreateNextContextOptions) => {
  const { address, isConnected } = useAccount();

  return {
    address,
    isConnected,
  };
};

export type Context = inferAsyncReturnType<typeof createContext>;
