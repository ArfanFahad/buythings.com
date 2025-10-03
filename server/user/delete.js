import prisma from "../db/client.js";

export const removeUser = async (id) => {
  try {
    const userDelete = await prisma.user.delete({
      where: {
        id: id,
      },
    });
    return userDelete;
  } catch (error) {
    console.error("Error occured: ", error.message);
  }
};
