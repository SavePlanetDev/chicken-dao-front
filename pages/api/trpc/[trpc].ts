import * as trpcNext from "@trpc/server/adapters/next";
import { appRouter } from "../../../trpc/server/routers/_app";
import { createContext } from "../../../trpc/server/context";

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
});
