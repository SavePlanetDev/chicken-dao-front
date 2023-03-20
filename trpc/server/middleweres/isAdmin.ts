import { middlewere } from "../trpc";

export const isAdmin = middlewere(async ({ ctx, next }) => {
  console.log("ctx: ", ctx);
  return next({ ctx });
});
