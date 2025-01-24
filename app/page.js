import Image from "next/image";
import HomePage from "./components/HomePage";
export const metadata = {
  title: "Home - Devloper Gossips",
  description: "...",
};

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <HomePage />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-muted-foreground">
          &copy; 2025 Senior Developer Gossips. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
