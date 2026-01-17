import Skeleton from "@mui/material/Skeleton";

export function HeroSkeleton() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col justify-between items-center">
          <Skeleton height={100} className="w-1/2" />
          <Skeleton height={50} className="w-1/2" />
          <div className="w-full pt-2.5 flex flex-col items-center">
            <Skeleton className="w-2/3 md:w-1/2" />
            <Skeleton className="w-2/3 md:w-1/2" />
            <Skeleton className="w-2/3 md:w-1/2" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center md:flex-row">
            <Skeleton variant="rounded" height={50} className="w-1/2 mt-2.5" />
            <div className="w-2/3 md:w-1/2 pt-2.5 flex justify-between md:justify-evenly md:items-center">
              <Skeleton variant="rounded" width={30} height={30} />
              <Skeleton variant="rounded" width={30} height={30} />
              <Skeleton variant="rounded" width={30} height={30} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
