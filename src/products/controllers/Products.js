const supabase = require("../../config/supabase");

async function getProducts(_, res) {
  try {
    const { data, error } = await supabase.from("products").select("*");
    if (error)
      return res
        .status(400)
        .json({ message: "Gick inte att hämta produkter ", error });
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ error: "Server fel" });
  }
}

async function getCategories(req, res) {
  try {
    const { data, error } = await supabase.from("categories").select("*");
    if (error) {
      return res
        .status(400)
        .json({ message: "Fel vid hämtning av produktkategorier", error });
    }
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ error: "Server fel" });
  }
}

module.exports = { getProducts, getCategories };
