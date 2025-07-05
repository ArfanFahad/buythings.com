import prisma from "../db/client.js";

// Getting all users
export const getAllUsers = async () => {
  return await prisma.user.findMany();
};

// Getting single user by it's ID
export const getUserById = async () => {
  return await prisma.user.findUnique({
    where: { id },
  });
};
