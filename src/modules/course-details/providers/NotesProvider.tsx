import useNotesOperations from "@/modules/course-details/hooks/useNotesOperations";

import {createContext, PropsWithChildren, useEffect, useState} from "react";

interface INotesContext {
  notes: INote[];
  getNotes: () => void;
}

export const NotesContext = createContext<INotesContext>({
  notes: [],
  getNotes: () => {},
});

const NotesProvider = ({children}: Required<PropsWithChildren>) => {
  const [notes, setNotes] = useState<INote[]>([]);

  const {getNotes} = useNotesOperations();

  useEffect(() => {
    setNotes(getNotes());
  }, [getNotes]);

  const handleGetNotes = () => setNotes(getNotes());

  return (
    <NotesContext.Provider
      value={{
        notes: notes,
        getNotes: handleGetNotes,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
