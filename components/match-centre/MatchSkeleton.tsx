export default function MatchSkeleton() {
  return (
    <div className="space-y-4">
      {[0, 1, 2].map((item) => (
        <div key={item} className="h-56 animate-pulse rounded-[1.6rem] border border-white/10 bg-white/[0.055]" />
      ))}
    </div>
  );
}
