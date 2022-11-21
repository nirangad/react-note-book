import React from "react";
import { Note } from "../types/Note.type";

export default function Home({notes}: {notes: Note[]}) {
  return (
    <div>
      <h1>Home</h1>
      <div>{JSON.stringify({ notes })}</div>
    </div>
  );
}
