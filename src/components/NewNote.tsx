import React from "react";
import { Note } from "../types/Note.type";
import NoteForm from "./NoteForm";

export default function NewNote({
  onCreateNote,
}: {
  onCreateNote: (note: Note) => Note[];
}) {
  const onSubmit = (data: Note) => {
    console.log('Data: ', data);
    console.log('Notes: ', onCreateNote(data));
  };

  return (
    <div>
      <h1 className="mb-4">New Note</h1>
      <NoteForm onSubmit={onSubmit} />
    </div>
  );
}
