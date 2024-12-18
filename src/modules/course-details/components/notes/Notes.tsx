import AddNote from "./AddNote";

import NotesProvider from "@/modules/course-details/providers/NotesProvider";

import ListNotes from "./ListNotes";

function Notes() {
  return (
    <NotesProvider>
      <div className='px-4 d-flex flex-column gap-4'>
        <AddNote />

        <ListNotes />
      </div>
    </NotesProvider>
  );
}

export default Notes;
