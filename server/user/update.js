import prisma from "../db/client.js";

export const updateUser = async (id, updatedFields) => {
  return await prisma.user.update({
    where: { id },
    data: updatedFields,
  });
};
