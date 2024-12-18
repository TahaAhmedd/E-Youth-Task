import useNotesProvider from "@/modules/course-details/hooks/useNotesProvider";

function ListNotes() {
  const {notes} = useNotesProvider();
  return (
    <div className='row g-2'>
      {notes.map((note, index) => (
        <div key={note.id} className='col-12 col-md-6 mb-2'>
          <div className='border border-secondary-dark bg-white rounded-2 p-3'>
            <strong>Note {index + 1}</strong>
            <p>{note.note}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListNotes;
