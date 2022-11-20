import "bootstrap/dist/css/bootstrap.min.css";

import { Container } from "react-bootstrap";
import { Navigate, Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import NewNote from "./components/NewNote";
import { Note, Tag } from "./types/Note.type";

import useLocalStorage, {
  StorageKey,
  StorageKeys,
} from "./hooks/useLocalStorage";

function App() {
  const [notes, setNotes] = useLocalStorage<Note[]>(
    StorageKeys.NOTES as StorageKey,
    []
  );

  const onCreateNote = (note: Note) => {
    note.id = uuidv4();
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });

    return notes;
  };

  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/new" element={<NewNote onCreateNote={onCreateNote}/>} />
        <Route path="/:id">
          <Route index element={<h1>Show</h1>}></Route>
          <Route path="edit" element={<h1>Edit</h1>}></Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
}

export default App;
