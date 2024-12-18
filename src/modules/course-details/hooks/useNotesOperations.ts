import {useCallback} from "react";

function useNotesOperations() {
  const saveNewNote = (note: INote) => {
    const notes = getNotes();
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
    getNotes();
  };

  const getNotes: () => INote[] = useCallback(() => {
    const storedNotes = localStorage.getItem("notes");
    return storedNotes ? JSON.parse(storedNotes) : [];
  }, []);

  return {saveNewNote, getNotes};
}

export default useNotesOperations;
