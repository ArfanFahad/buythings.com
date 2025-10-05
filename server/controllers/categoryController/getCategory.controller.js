import { getCategoryModel } from "../../model/category/getCategory.model.js";

export const getCategoryController = async (req, res) => {
  try {
    const data = await getCategoryModel();
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
