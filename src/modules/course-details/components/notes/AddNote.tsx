import {Button} from "@mui/material";

import {useState} from "react";

import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";

import useNotesProvider from "@/modules/course-details/hooks/useNotesProvider";

import useNotesOperations from "@/modules/course-details/hooks/useNotesOperations";

function AddNote() {
  const [showAddNote, setShowAddNote] = useState(false);
  const [note, setNote] = useState<string>("");

  const {saveNewNote} = useNotesOperations();

  const {getNotes} = useNotesProvider();

  const handleSaveNote = () => {
    saveNewNote({id: Date.now().toString(), note});
    getNotes();
    setNote("");
  };

  const toggleShowAddNote = () => {
    setShowAddNote((prev) => !prev);
  };

  return (
    <>
      {!showAddNote ? (
        <Button
          variant='outlined'
          onClick={toggleShowAddNote}
          sx={{
            color: "grey",
            textTransform: "capitalize",
            backgroundColor: "white",
            maxWidth: "300px",
            width: "100%",
          }}
          className='border border-secondary-dark d-flex justify-content-between align-items-center py-2 rounded-3'
        >
          Create New Note
          <AddCircleSharpIcon fontSize='small' className='text-dark' />
        </Button>
      ) : (
        <div className='d-flex flex-column gap-3 align-items-end'>
          <textarea
            name='note'
            id='add-note'
            cols={30}
            rows={10}
            placeholder='Add New Note'
            className='py-2 px-3 shadow-sm'
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />

          <div className='d-flex gap-2'>
            <Button
              variant='contained'
              className='bg-white'
              sx={{color: "black", textTransform: "capitalize", fontWeight: 600, letterSpacing: 1}}
              onClick={toggleShowAddNote}
            >
              Cancel
            </Button>
            <Button
              variant='contained'
              className='bg-dark'
              sx={{color: "white", textTransform: "capitalize"}}
              onClick={handleSaveNote}
            >
              Save Note
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default AddNote;
