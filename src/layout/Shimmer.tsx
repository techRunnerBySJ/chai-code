// components/ui/Shimmer.tsx
export function Shimmer() {
    return (
      <div className="animate-pulse flex flex-col gap-4 w-full max-w-4xl mx-auto p-4">
        <div className="h-6 w-40 bg-gray-300 rounded-md" />
        <div className="h-64 w-full bg-gray-200 rounded-lg" />
        <div className="h-6 w-3/4 bg-gray-300 rounded-md" />
        <div className="h-10 w-32 bg-gray-300 rounded-md self-start" />
      </div>
    );
  }
  