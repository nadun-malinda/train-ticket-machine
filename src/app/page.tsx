import { KeyboardInput } from "@/components/keyboard-input";
import { fetchStations } from "../lib/api";

export default async function Home() {
  const stations = await fetchStations();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-semibold">Train Ticket Machine</h1>

        <KeyboardInput stations={stations} />
      </main>
    </div>
  );
}
