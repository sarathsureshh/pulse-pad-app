import NoteWidget from "@/components/ui/NoteWidget";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NoteWidget />
    </>
  );
}
