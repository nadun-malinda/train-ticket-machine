import { Station } from "@/types/station";

export async function fetchStations(): Promise<Station[]> {
  if (!process.env.API_URI) {
    throw new Error("API_URI is not defined");
  }

  const response = await fetch(process.env.API_URI, {
    next: {
      revalidate: 3600 * 24, // chache the response for 1 day
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch stations");
  }
  return response.json();
}
