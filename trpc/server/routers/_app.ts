import { procedure, router } from "../trpc";
import {
  NewProjectDTO,
  NewUserDTO,
  addNewUser,
  addNewProject,
  fetchAllProjects,
} from "../services";

export const appRouter = router({
  addNewProject: procedure.input(NewProjectDTO).mutation(async ({ input }) => {
    const result = await addNewProject(input);
    return result;
  }),
  addNewUser: procedure.input(NewUserDTO).mutation(async ({ input }) => {
    const result = await addNewUser(input);
    return result;
  }),
  projects: procedure.query(async () => {
    const result = await fetchAllProjects();
    return result;
  }),
});

export type AppRouter = typeof appRouter;
