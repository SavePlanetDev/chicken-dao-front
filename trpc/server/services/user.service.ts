import prisma from "../../../prisma";
import { z } from "zod";

export const Role = z.enum(["ADMIN", "USER"]);

export const NewUserDTO = z.object({
  address: z.string(),
  name: z.string(),
  avatarUrl: z.string(),
  role: Role,
});

export type tNewUserDTO = z.infer<typeof NewUserDTO>;

export const addNewUser = async (input: tNewUserDTO) => {
  try {
    const result = await prisma.user.create({ data: input });
    return result;
  } catch (error: any) {
    console.log("SERVICE[createNewUser]: ", error.message);
    return null;
  }
};
