import React from 'react'
import { Note as NoteType } from "../types/Note.type";
import Note from './Note';

export default function NoteList({notes}: {notes: NoteType[]}) {

  return (
    <div>
      {
        notes.map(note => <Note note={note} key={note.id}/>)
      }
    </div>
  )
}
