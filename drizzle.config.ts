import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./db/schema.ts",
  out: "./db/migrations",
  dialect: "mysql",
  dbCredentials: {
    host: process.env.DATABASE_HOST!,
    user: process.env.DATABASE_USERNAME!,
    password: process.env.DATABASE_PASSWORD!,
    database: process.env.DATABASE_NAME!,
  },
  breakpoints: true,
});
