import React, { useState } from "react";


import Heading from "./components/Header.jsx";
import Note from "./components/Note.jsx";
import Footer from "./components/Footer.jsx";

import CreateArea from "./components/CreateArea.jsx";




function App() {

  const [notes, setNotes] = useState([]);
  function addNote(newNote) {
    setNotes((prev) => {

      return [...prev, newNote];
    })
  }

  function deleteNote(id) {
    setNotes((prevNote) => {
      return (prevNote.filter(
        (noteItem, index) => {
          return index !== id
        }
      ));
    });
  }


  return <div>
    <Heading />
    <CreateArea
      onAdd={addNote}

    />
    {notes.map((noteItem, index) => {
      return <Note
        key={index}
        id={index}
        title={noteItem.title} content={noteItem.content} onDelete={deleteNote}

      />
    })}

    <Footer />
  </div>
}

export default App;