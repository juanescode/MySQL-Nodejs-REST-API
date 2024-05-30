import { pool } from "../db.js";

export const getProducts = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM product");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const getProduct = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM product WHERE id = ?", [
      req.params.id,
    ]);

    if (rows.length <= 0)
      return res.status(404).sjon({
        message: "Product not found",
      });

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const postProduct = async (req, res) => {
  const { name, price } = req.body;
  try {
    const [rows] = await pool.query(
      "INSERT INTO product (name, price) VALUES (?, ?)",
      [name, price]
    );
    res.json({
      id: rows.insertId,
      name,
      price,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

export const patchProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  try {
    const [result] = await pool.query(
      "UPDATE product SET name = IFNULL(?, name), price = IFNULL(?, price) WHERE id = ?",
      [name, price, id]
    );

    console.log(result);

    if (result.affectedRows === 0)
      return res.status(404).json({
        message: "Employe not found",
      });

    const [rows] = await pool.query("SELECT * FROM product WHERE id = ?", [id]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM product WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: "Product not found",
      });

    res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrond",
    });
  }
};
