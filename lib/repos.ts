import octokit from '@/lib/octokit';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { data } = await octokit.repos.listForUser({
      username: 'SedatUygur',
    });
    res.status(200).json(data);
  } catch (error) {
    res
      .status(500)
      .json({ error: `Failed to fetch repositories. Error: ${error}` });
  }
}
