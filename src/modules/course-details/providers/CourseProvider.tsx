import {createContext, PropsWithChildren, useEffect, useState} from "react";

import {apiGetCourse} from "../server";

import LoadingScreen from "@/components/LoadingScreen";

import useUrlQueryParam from "@/hooks/useUrlQueryParam";

interface INotesContext {
  course: ICourse;
  isLoading: boolean;
  error: string | null;
}

export const CourseContext = createContext<INotesContext>({
  course: {} as ICourse,
  isLoading: true,
  error: null,
});

const CourseProvider = ({children}: Required<PropsWithChildren>) => {
  const [isLoading, setIsLoading] = useState(true);
  const [course, setCourse] = useState<ICourse>({} as ICourse);
  const [error, setError] = useState<string | null>(null);

  const {setSearchParams, videoId} = useUrlQueryParam();

  useEffect(() => {
    apiGetCourse()
      .then((data) => {
        if (!videoId) {
          const param = new URLSearchParams(window.location.search);
          param.set("videoId", String(data.sections[0].items[0].id));
          setSearchParams(param);
        }
        setCourse(data);
      })
      .catch(() => {
        setError("Something went wrong");
      })
      .finally(() => setIsLoading(false));
  }, [setSearchParams, videoId]);

  if (isLoading) return <LoadingScreen />;

  return (
    <CourseContext.Provider
      value={{
        course,
        isLoading,
        error,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export default CourseProvider;
