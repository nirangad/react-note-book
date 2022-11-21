import "bootstrap/dist/css/bootstrap.min.css";

import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Navigate, Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { useNavigate } from "react-router-dom";
import NewNote from "./components/NewNote";
import { Note } from "./types/Note.type";

import useLocalStorage, {
  StorageKey,
  StorageKeys,
} from "./hooks/useLocalStorage";
import Home from "./components/Home";

function App() {
  const [notes, setNotes] = useLocalStorage<Note[]>(
    StorageKeys.NOTES as StorageKey,
    []
  );

  const navigate = useNavigate();

  const onCreateNote = (note: Note) => {
    note.id = uuidv4();
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });

    navigate(`/`);
  };

  useEffect(() => {
    console.log("Notes: ", notes);
  }, [notes]);

  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<Home notes={notes} />} />
        <Route path="/new" element={<NewNote onCreateNote={onCreateNote} />} />
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
