import prisma from "../db/client.js";

export const createUser = async (name, email, password) => {
  try {
    const userCreate = await prisma.user.create({
      data: { name, email, password },
    });
    return userCreate;
  } catch (error) {
    console.error("Error fetching user by email: ", error);
    throw error;
  }
};
