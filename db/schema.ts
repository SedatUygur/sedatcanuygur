import {
  index,
  mysqlTable,
  bigint,
  varchar,
  text,
} from "drizzle-orm/mysql-core";

export const emails = mysqlTable(
  "emails",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
    fullName: varchar("full_name", { length: 256 }).notNull(),
    emailAddress: varchar("email_address", { length: 256 }).notNull(),
    message: text("message").notNull(),
  },
  (users) => [
    index("name_idx").on(users.fullName),
    index("email_address_idx").on(users.emailAddress),
  ],
);

export type Email = typeof emails.$inferSelect;
