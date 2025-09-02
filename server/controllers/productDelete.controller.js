export const productDelete = async (req, res) => {
  const { id } = req.params;

  try {
    res.status(200).json({
      message: `Product${id} deleted successfully`,
    });
  } catch (error) {
    res.status(500).json({ error: "Delete failed" });
  }
};
