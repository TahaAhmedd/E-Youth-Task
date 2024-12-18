import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import useCourseProvider from "../hooks/useCourseProvider";

function HeaderNavigation() {
  const {course} = useCourseProvider();
  return (
    <div className='w-100 d-flex align-items-center gap-1 bg-main py-3 px-3 header-height text-white fs-6'>
      <KeyboardBackspaceIcon />
      <h1 className='m-0 fs-6'>{course.title}</h1>
    </div>
  );
}

export default HeaderNavigation;
