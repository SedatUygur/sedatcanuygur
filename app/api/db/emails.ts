'use server';

import { Email, emails } from '@/db/schema';
import { db } from '@/db';
import { ParseDatabaseErrorResult } from '@/lib/db/ParseError';

type InsertEmailProps = Pick<Email, 'emailAddress' | 'fullName' | 'message'>;

type InsertEmailResponse = {
  errorMessage?: string;
  columnErrors?: ParseDatabaseErrorResult<InsertEmailProps>;
};

/**
 * Inserts a new email into the emails table.
 *
 * @param email - The email details to insert.
 *
 * @returns An object with an errorMessage property if there was an error,
 *   or an object with a columnErrors property if there were error(s) with
 *   specific columns.
 */
export async function insertEmail(
  email: InsertEmailProps,
): Promise<InsertEmailResponse> {
  try {
    await db.insert(emails).values(email);
    return {};
  } catch (error) {
    if (error) {
      throw error;
    } else {
      return { errorMessage: 'Unknown Error' };
    }
  }
}
