import { Skeleton } from '@/components/ui/Skeleton';

export function BlogCardSkeleton() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[75px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4" />
        <div className="flex w-full flex-row items-center justify-end">
          <Skeleton className="h-4 w-[100px]" />
        </div>
      </div>
    </div>
  );
}
