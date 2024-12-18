export const apiGetCourse = async () => {
  try {
    const res = await fetch("/course.json");
    const data = await res.json();
    return data as ICourse;
  } catch (error) {
    throw new Error(error as string);
  }
};
