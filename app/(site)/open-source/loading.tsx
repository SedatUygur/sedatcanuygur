import { PullRequestCardSkeleton } from "@/components/skeletons/PullRequestCardSkeleton";

export default function Loading() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="font-bold text-4xl">My GitHub Repositories</h1>
      <div className="flex flex-col space-y-4 w-full">
        <PullRequestCardSkeleton />
        <PullRequestCardSkeleton />
        <PullRequestCardSkeleton />
      </div>
    </div>
  );
}
