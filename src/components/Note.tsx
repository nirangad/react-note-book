import './Note.css';
import { Note as NoteType } from "../types/Note.type";

export default function Note({note}: {note: NoteType}) {
  return (
    <div className="note">
      <span className="header">{note.title}</span>
      <span className="markdown">{note.markdown}</span>
      <span className="tags">
        {note.tags.map(t => <span className='tag'>{t.label}</span>)}
      </span>
    </div>
  )
}
