import React from "react";
import { Note, CreateNoteCallback } from "../types/Note.type";
import NoteForm from "./NoteForm";

export default function NewNote({
  onCreateNote,
}: {
  onCreateNote: CreateNoteCallback;
}) {
  const onSubmit = (data: Note) => {
    console.log(data);
  };

  return (
    <div>
      <h1 className="mb-4">New Note</h1>
      <NoteForm onSubmit={onSubmit} />
    </div>
  );
}
