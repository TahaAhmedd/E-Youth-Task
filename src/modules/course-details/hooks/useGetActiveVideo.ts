import useUrlQueryParam from "@/hooks/useUrlQueryParam";

import {useCallback, useEffect, useState} from "react";

import {getVideoType} from "@/helpers";

function useGetActiveVideo(course: ICourse) {
  const {videoId} = useUrlQueryParam();
  const [activeVideo, setActiveVideo] = useState<IItem>({} as IItem);

  const getActiveVideo = useCallback(() => {
    if (!videoId || !course.sections) return;
    course.sections.map((section) => {
      section.items.find((item) => {
        if (item.id == Number(videoId)) {
          setActiveVideo(item);
          return;
        }
      });
    });
  }, [videoId, course]);

  useEffect(() => {
    getActiveVideo();
  }, [getActiveVideo]);

  const videoType = getVideoType(activeVideo?.video) || "mp4";

  return {activeVideo, videoType};
}

export default useGetActiveVideo;
