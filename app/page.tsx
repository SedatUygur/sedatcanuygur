import { Progress } from "@/components/ui/Progress";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 py-4">
      <h3>This site is under construction</h3>
      <p>
        I have never used Radix UI before so I am gonna learn how to style stuff
      </p>
      <Progress value={50} className="w-[60%]" />
    </div>
  );
}
