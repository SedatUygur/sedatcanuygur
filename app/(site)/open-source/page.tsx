import { Pagination } from "@/components/Pagination";
import { PullRequestCard } from "@/components/PullRequestCard";
import { openSourcePullRequests } from "@/lib/PullRequest";

type OpenSourceProps = {
  searchParams: {
    page?: string;
  };
};

export default async function OpenSourcePage({
  searchParams,
}: OpenSourceProps) {
  const searchParameters = await searchParams;
  const page = (searchParameters.page && parseInt(searchParameters.page)) || 1;
  const start = (page - 1) * 10;

  const pullRequests = await openSourcePullRequests();
  const numPages = Math.ceil(pullRequests.length / 10);

  return (
    <div className="flex flex-col items-center space-y-6">
      <h1 className="text-primary dark:text-bright font-bold text-3xl">
        Open Source Contributions
      </h1>
      <div className="prose">
        <div className="flex flex-col space-y-6 not-prose">
          {pullRequests.slice(start, start + 10).map((pullRequest) => (
            <PullRequestCard
              key={pullRequest.number}
              pullRequest={pullRequest}
            />
          ))}
          <Pagination page={page} numPages={numPages} path="open-source" />
        </div>
      </div>
    </div>
  );
}
