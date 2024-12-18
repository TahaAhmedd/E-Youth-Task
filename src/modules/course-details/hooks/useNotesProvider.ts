import {NotesContext} from "@/modules/course-details/providers/NotesProvider";
import {useContext} from "react";

function useNotesProvider() {
  return useContext(NotesContext);
}

export default useNotesProvider;
