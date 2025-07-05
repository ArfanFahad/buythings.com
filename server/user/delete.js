import prisma from "../db/client.js";

export const deleteUser = async (id) => {
  return await prisma.user.delete({
    where: { id },
  });
};
