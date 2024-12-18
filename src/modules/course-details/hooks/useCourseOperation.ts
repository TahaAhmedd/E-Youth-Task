import {useCallback, useEffect, useMemo} from "react";

import useCourseProvider from "./useCourseProvider";

import {useSearchParams} from "react-router-dom";

function useCourseOperation() {
  const {
    course: {sections},
  } = useCourseProvider();

  const [searchParams, setSearchParams] = useSearchParams();

  const videoId = parseInt(searchParams.get("videoId") || "");

  const allVideos = useMemo(() => {
    return sections.flatMap((section) =>
      section.items.map((item) => ({
        ...item,
        sectionTitle: section.title,
      }))
    );
  }, [sections]);

  const currentIndex = useMemo(
    () => allVideos.findIndex((video) => video.id === videoId),
    [allVideos, videoId]
  );

  const handelAddVideoIdInParams = useCallback(
    (videoId: number) => {
      const param = new URLSearchParams(window.location.search);
      param.set("videoId", String(videoId));
      setSearchParams(param);
    },
    [setSearchParams]
  );

  // handle If the videoId is invalid, redirect to the last video in the last section
  useEffect(() => {
    if (currentIndex === -1) {
      const lastVideo = allVideos[allVideos.length - 1];
      handelAddVideoIdInParams(lastVideo.id);
    }
  }, [currentIndex, allVideos, handelAddVideoIdInParams]);

  const handleNextVideo = useCallback(() => {
    if (currentIndex < allVideos.length - 1) {
      const nextVideo = allVideos[currentIndex + 1];
      handelAddVideoIdInParams(nextVideo.id);
    }
  }, [currentIndex, allVideos, handelAddVideoIdInParams]);

  const handlePrevVideo = useCallback(() => {
    if (currentIndex > 0) {
      const prevVideo = allVideos[currentIndex - 1];
      handelAddVideoIdInParams(prevVideo.id);
    }
  }, [currentIndex, allVideos, handelAddVideoIdInParams]);

  const currentVideo = allVideos[currentIndex];
  const isNextDisabled = currentIndex === allVideos.length - 1;
  const isPrevDisabled = currentIndex === 0;

  return {
    isPrevDisabled,
    isNextDisabled,
    currentVideo,
    handleNextVideo,
    handlePrevVideo,
    handelAddVideoIdInParams,
  };
}

export default useCourseOperation;
