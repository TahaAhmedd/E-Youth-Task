import CloseIcon from "@mui/icons-material/Close";

import PlayListItem from "./PlayListItem";

import useCourseProvider from "../../hooks/useCourseProvider";

import "@/modules/course-details/style/playList.css";

function PlayList() {
  const {course} = useCourseProvider();

  return (
    <>
      <div className='h-screen d-flex flex-column border bg-white'>
        <div className='text-color py-2 px-4 d-flex justify-content-between align-items-center bg-white border-bottom'>
          <h5 className=''>Course Content</h5>

          <label htmlFor='playList' style={{cursor: "pointer"}}>
            <CloseIcon />
          </label>
        </div>

        <div className='overflow-y-auto pt-3'>
          {course.sections?.map((section) => (
            <PlayListItem {...section} key={section.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default PlayList;
