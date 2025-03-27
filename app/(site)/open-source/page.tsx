import { Pagination } from "@/components/Pagination";
import octokit from "@/lib/octokit";

type OpenSourceProps = {
  searchParams: {
    page?: string;
  };
};

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
};

const fetchRepos = async (): Promise<Repo[]> => {
  try {
    const { data } = await octokit.repos.listForUser({
      username: "SedatUygur",
    });
    return data;
  } catch (error) {
    console.error("Failed to fetch repositories", error);
    return [];
  }
};

export default async function OpenSourcePage({
  searchParams,
}: OpenSourceProps) {
  const searchParameters = await searchParams;
  const page = (searchParameters.page && parseInt(searchParameters.page)) || 1;
  const start = (page - 1) * 10;

  const repos = await fetchRepos();
  const numPages = Math.ceil(repos.length / 10);

  return (
    <div className="flex flex-col items-center space-y-6">
      <h1 className="text-primary dark:text-bright font-bold text-3xl">
        My GitHub Repositories
      </h1>
      <div className="prose">
        <div className="flex flex-col space-y-6 not-prose">
          <ul>
            {repos.slice(start, start + 10).map((repo) => (
              <li key={repo.id} className="mb-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2"
                  >
                    {repo.name}
                  </a>
                  <p className="text-gray-600 dark:text-gray-400">
                    {repo.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <Pagination page={page} numPages={numPages} path="open-source" />
        </div>
      </div>
    </div>
  );
}
