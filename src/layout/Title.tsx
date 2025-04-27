import { FlipWords } from "../components/ui/flip-words";

export function TitleFLipWords() {
  const words = ["Community", "Growth", "Learning", "Support"];

  return (
    <div className=" flex justify-center items-center px-4 w-full">
      <div className="md:text-5xl text-xl text-neutral-700 dark:text-neutral-400 font-bold">
        Consistency and
        <FlipWords words={words} />
      </div>
    </div>
  );
}
