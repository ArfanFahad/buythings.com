import prisma from "../db/client.js";

export const getUserByEmail = async (email) => {
  try {
    const emailCheck = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return emailCheck;
  } catch (error) {
    console.error("Error fetching user by email: ", error);
    throw error;
  }
};
