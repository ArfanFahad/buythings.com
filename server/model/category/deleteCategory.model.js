/* This section has some serious 
logic like deleting category, 
suppose you delete a category and
 there are some product who were 
referenced this category? 
what happened then, 
it will create referential
integrity problem, 
so for this problem 
we can apply logic like, 
the category can be deleted 
if only that category 
doesn't have any data,
otherwise an error message will be shown  */

import prisma from "../../db/client.js";

export const deleteCategoryModel = async (id) => {
  const categoryID = id;

  // checking if category exist
  const category = await prisma.category.findUnique({
    where: { id: categoryID },
  });

  if (!category) {
    return { success: false, message: "category not found" };
  }

  // checking if any product is belong to this category
  const productCount = await prisma.product.count({
    where: { categoryId: categoryID },
  });

  if (productCount > 0) {
    return {
      success: false,
      message: `Cannot delete category "${category.name}" because it has ${productCount} product(s). `,
    };
  }

  // Safe to delete
  await prisma.category.delete({
    where: { id: categoryID },
  });

  return { success: true, message: "Category deleted successfully." };
};
