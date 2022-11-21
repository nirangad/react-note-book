import { Note } from "../types/Note.type";

export default function Note({note}: {note: Note}) {
  return (
    <div className="note">
      <span className="header">{note.title}</span>
      <span className="markdown">{note.title}</span>
      <span className="tags">
        {note.tags.map(t => t.label)}
      </span>
    </div>
  )
}
