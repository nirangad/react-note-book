export type CreateNote = {
  onCreateNote: (note: Note, tags: Tag[]) => {
    notes: Note[];
    tags: Tag[];
}
}

export type NoteFormProps = {
  onSubmit: (data: Note) => void;
};

export type Note = {
  id?: string;
  title: string;
  markdown: string;
  tags: Tag[];
};

export type Tag = {
  id: string;
  label: string;
};
