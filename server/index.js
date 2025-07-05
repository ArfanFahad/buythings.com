import { createUser } from "./user/create.js";
import { getAllUsers } from "./user/get.js";
import { updateUser } from "./user/update.js";
import { deleteUser } from "./user/delete.js";

async function main() {
  console.log(await getAllUsers());
}

main()
  .catch(console.error)
  .finally(() => process.exit());
