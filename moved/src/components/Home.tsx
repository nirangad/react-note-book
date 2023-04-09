import React from "react";
import { Note } from "../types/Note.type";
import NoteList from "./NoteList";

export default function Home({notes}: {notes: Note[]}) {
  return (
    <div>
      <h1>Home</h1>
      <NoteList notes={notes}/>
    </div>
  );
}
