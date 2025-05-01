import { Button } from "../components/ui/moving-border";

export function JoinNowButton() {
  return (
    <div className="flex justify-center items-start">
      <a 
        href="https://courses.chaicode.com/learn/view-all?show=batch&type=17"
        target="_blank"
        rel="noopener noreferrer"
        className="block cursor-pointer"
      >
        <Button
          borderRadius="1.75rem"
          className="relative flex items-center space-x-2 px-6 py-2 bg-white dark:bg-slate-900 text-black dark:text-white border border-neutral-200 dark:border-slate-800 animate-border-pulse cursor-pointer"
        >
          {/* Blinking red dot */}
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-red-600"></span>
          </span>

          {/* Text */}
          <span className="text-black dark:text-white font-semibold">CHECK ALL LIVE COHORTS</span>
        </Button>
      </a>
    </div>
  );
}
