import NoteWidget from "@/components/ui/NoteWidget";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        {notes.map((note) => {
          return <NoteWidget heading={note.heading} body={note.body} />;
        })}
      </div>
    </>
  );
}

const notes = [
  {
    heading: "First Notes",
    body: "This is the content of your note. You can add your text here.",
  },
  {
    heading: "Second Notes",
    body: "This is the content of your note. You can add your text here.",
  },
  {
    heading: "Third Notes",
    body: "This is the content of your note. You can add your text here.",
  },
  {
    heading: "Fourth Notes",
    body: "This is the content of your note. You can add your text here.",
  },
  {
    heading: "Fourth Notes",
    body: "This is the content of your note. You can add your text here.",
  },
  {
    heading: "Fourth Notes",
    body: "This is the content of your note. You can add your text here.",
  },
  {
    heading: "Fourth Notes",
    body: "This is the content of your note. You can add your text here.",
  },
  {
    heading: "Fourth Notes",
    body: "This is the content of your note. You can add your text here.",
  },
  {
    heading: "Fourth Notes",
    body: "This is the content of your note. You can add your text here.",
  },
  {
    heading: "Fourth Notes",
    body: "This is the content of your note. You can add your text here.",
  },
];
