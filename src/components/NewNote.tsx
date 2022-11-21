import { Note } from "../types/Note.type";
import NoteForm from "./NoteForm";

export default function NewNote({
  onCreateNote,
}: {
  onCreateNote: (note: Note) => void;
}) {
  const onSubmit = (data: Note) => {
    onCreateNote(data);
  };

  return (
    <div>
      <h1 className="mb-4">New Note</h1>
      <NoteForm onSubmit={onSubmit} />
    </div>
  );
}
