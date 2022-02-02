import React, { useContext } from "react";
import Note from "./Note";
import Context from "../context/context";

function NotesList(props) {
  const { deleteNote } = props;
  const { notes } = useContext(Context);

  return (
    <ul>
      {notes.map((note, index) => (
        <li key={index}>
          <Note
            title={note.title}
            description={note.description}
            code={note.code}
            visibility={note.public}
            noteId={note.id}
            deleteNote={deleteNote}
          />
        </li>
      ))}
    </ul>
  );
}
export default NotesList;
