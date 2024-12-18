import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import NavigationBtn from "./NavigationBtn";

import useCourseOperation from "../../hooks/useCourseOperation";

import ReactPlayer from "react-player";

import PlayCircleIcon from "@mui/icons-material/PlayCircle";

import "../..//style/player.css";
import useCourseProvider from "../../hooks/useCourseProvider";

function VideoPlayer() {
  const {
    course: {poster},
  } = useCourseProvider();
  const {currentVideo, handleNextVideo, handlePrevVideo, isNextDisabled, isPrevDisabled} =
    useCourseOperation();

  return (
    <div className='video-player position-relative w-100 bg-black' style={{height: 350}}>
      <ReactPlayer
        url={currentVideo?.video}
        playing
        width='100%'
        height='100%'
        controls
        playIcon={<PlayCircleIcon className='text-white' style={{fontSize: 60}} />}
        light={poster}
        config={{
          file: {
            attributes: {
              controlsList: "nodownload",
            },
          },
        }}
      />
      <NavigationBtn
        className='next'
        icon={<ArrowForwardIosIcon fontSize='small' />}
        onClick={handleNextVideo}
        disabled={isNextDisabled}
      />
      <NavigationBtn
        className='prev'
        icon={<ArrowBackIosIcon fontSize='small' />}
        onClick={handlePrevVideo}
        disabled={isPrevDisabled}
      />
    </div>
  );
}

export default VideoPlayer;
