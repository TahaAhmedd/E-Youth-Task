import {useContext} from "react";
import {CourseContext} from "../providers/CourseProvider";

function useCourseProvider() {
  return useContext(CourseContext);
}

export default useCourseProvider;
