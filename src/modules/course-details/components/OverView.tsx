import SchoolIcon from "@mui/icons-material/School";

import FileCopyIcon from "@mui/icons-material/FileCopy";

import useCourseProvider from "../hooks/useCourseProvider";

function OverView() {
  const {course} = useCourseProvider();

  const videosQuantity = course.sections
    .map((section) => section.items.length)
    .reduce((acc, curr) => acc + curr, 0);

  return (
    <div className='d-flex flex-column gap-2 overflow-x-hidden'>
      <h2>{course.title}</h2>
      <div className='row-gap-3'>
        <div className='col-6 col-lg-4 d-flex align-items-center gap-1 text-color'>
          <SchoolIcon fontSize='small' className='text-star' />
          {course.students} Students
        </div>

        <div className='col-6 col-lg-8 d-flex align-items-center gap-1 text-color'>
          <SchoolIcon fontSize='small' className='text-star' />
          {course.level}
        </div>

        <div className='col-6 col-lg-4 d-flex align-items-center gap-1 text-color'>
          <FileCopyIcon fontSize='small' className='text-star' />
          {course.sections.length} lessons
        </div>

        <div className='col-6 col-lg-8 d-flex align-items-center gap-1 text-color'>
          <FileCopyIcon fontSize='small' className='text-star' />
          {videosQuantity} Total Items
        </div>
      </div>

      <div className='mt-4'>
        <h6>Description</h6>
        <p>{course.description}</p>
      </div>
    </div>
  );
}

export default OverView;
