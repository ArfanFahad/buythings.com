import prisma from "../db/client.js";

export const createUser = async (name, email, password) => {
  return await prisma.user.create({
    data: { name, email, password },
  });
};
