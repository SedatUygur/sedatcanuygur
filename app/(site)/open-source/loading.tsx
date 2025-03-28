import { PullRequestCardSkeleton } from '@/components/skeletons/PullRequestCardSkeleton';

export default function Loading() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-4xl font-bold">My GitHub Repositories</h1>
      <div className="flex w-full flex-col space-y-4">
        <PullRequestCardSkeleton />
        <PullRequestCardSkeleton />
        <PullRequestCardSkeleton />
      </div>
    </div>
  );
}
