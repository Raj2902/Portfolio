import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

try {
  const connection = await db.getConnection();
  console.log("✅ MySQL connected successfully");
  connection.release();
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error("❌ MySQL connection failed:", error.message);
  } else {
    console.error("❌ MySQL connection failed:", error);
  }
  process.exit(1);
}
