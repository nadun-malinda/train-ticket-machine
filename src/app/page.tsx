import { KeyboardInput } from "@/components/keyboard-input";
import { fetchStations } from "../lib/api";

export default async function Home() {
  const stations = await fetchStations();

  return (
    <div className="container mx-auto py-10 px-2">
      <main className="flex flex-col gap-[32px] row-start-2 sm:items-start">
        <h1 className="text-3xl font-semibold">Train Ticket Machine</h1>

        <KeyboardInput stations={stations} />
      </main>
    </div>
  );
}
