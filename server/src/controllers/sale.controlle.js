import { pool } from "../db.js";

export const getProductInventory = async (req, res) => {
  try {
    const query = `
          SELECT p.id, p.name, p.price
          FROM product p
          LEFT JOIN sale s ON p.id = s.product_id
          GROUP BY p.id, p.name, p.price
        `;

    const [rows] = await pool.query(query);
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// export const sellProduct = async (req, res) => {
//   const { id } = req.params;
//   const sale_date = new Date().toISOString().slice(0, 10);

//   try {

//     await pool.query("DELETE FROM product WHERE id = ?", [id]);


//     await pool.query("INSERT INTO sale (product_id, sale_date) VALUES (?, ?)", [
//       id,
//       sale_date,
//     ]);

//     res.status(200).json({ message: "Product sold successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Something went wrong" });
//   }
// };
