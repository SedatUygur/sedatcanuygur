import 'dotenv/config';
import { Config } from 'drizzle-kit';

export default {
  schema: './db/schema.ts',
  out: './db/migrations',
  driver: 'mysql2',
  dbCredentials: {
    host: process.env.DATABASE_HOST!,
    user: process.env.DATABASE_USERNAME!,
    password: process.env.DATABASE_PASSWORD!,
    database: process.env.DATABASE_NAME!,
    connectionString: `mysql://${process.env.DATABASE_USERNAME!}:${process.env.DATABASE_PASSWORD!}@${process.env.DATABASE_HOST!}/${process.env.DATABASE_NAME!}`,
  },
  breakpoints: true,
} satisfies Config;
