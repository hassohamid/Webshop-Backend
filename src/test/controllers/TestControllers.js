const supabase = require("../../config/supabase");
const fs = require("fs");
const jsonData = JSON.parse(fs.readFileSync("./src/data/data.json", "utf-8"));

async function addTestData(req, res) {
  try {
    const { error: categoriesError } = await supabase
      .from("categories")
      .insert(jsonData.categories);
    const { error: productsError } = await supabase
      .from("products")
      .insert(jsonData.products);

    if (categoriesError || productsError) {
      return res.status(400).json({ error: categoriesError || productsError });
    }
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

async function deleteData(req, res) {
  try {
    const { error: productsError } = await supabase
      .from("products")
      .delete()
      .neq("id", 0);
    const { error: categoriesError } = await supabase
      .from("categories")
      .delete()
      .neq("id", 0);

    if (productsError || categoriesError) {
      return res.status(400).json({
        error: productsError.message || categoriesError.message,
      });
    }
  } catch (error) {
    return res.sendStatus(500);
  }
}

module.exports = { addTestData, deleteData };
