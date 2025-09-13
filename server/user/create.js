import prisma from "../db/client.js";

export const createUser = async (name, email, password) => {
  // check if user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error("Email already exists");
  }

  return await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });
};
