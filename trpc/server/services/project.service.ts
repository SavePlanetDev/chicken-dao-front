import prisma from "../../../prisma";
import { z } from "zod";

export const NewProjectDTO = z.object({
  address: z.string().length(42),
  ownerId: z.string().length(42),
  name: z.string(),
  website: z.string(),
  facebook: z.string(),
  twitter: z.string(),
  discord: z.string(),
  description: z.string(),
  logoUrl: z.string().url(),
  avatarUrl: z.string().url(),
});

export type tNewProjectDTO = z.infer<typeof NewProjectDTO>;

export const addNewProject = async (input: tNewProjectDTO) => {
  try {
    const result = await prisma.project.create({ data: input });
    console.log(input);
    return result;
  } catch (error: any) {
    console.log("SERVICE[addNewProject]: ", error.message);
    return null;
  }
};

export const fetchAllProjects = async () => {
  try {
    const result = await prisma.project.findMany({
      include: { owner: true, comments: true },
    });
    return result;
  } catch (error: any) {
    console.log("SERVICE[fetchAllProjects]: ", error.message);
    return null;
  }
};
export const fetchProjectOfOwner = async () => {};
export const fetchProjectByAddress = async () => {};
