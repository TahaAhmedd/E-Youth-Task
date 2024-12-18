import VideoPlayer from "@/modules/course-details/components/video-player/VideoPlayer";

import HeaderNavigation from "@/modules/course-details/components/HeaderNavigation";

import TabsLinks from "@/modules/course-details/components/TabsLinks";

import PlayList from "@/modules/course-details/components/course-content/PlayList";

import CourseProvider from "./providers/CourseProvider";

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export const Component = () => {
  return (
    <CourseProvider>
      <div className='w-100 h-100 row g-0'>
        {/* this input for toggle play list */}
        <input type='checkbox' hidden id='playList' defaultChecked />

        <label
          htmlFor='playList'
          style={{cursor: "pointer"}}
          className='toogle-sidebar'
          title='Toggle sidebar'
        >
          <KeyboardBackspaceIcon />
        </label>

        <div className='col-9'>
          <HeaderNavigation />
          <VideoPlayer />
          <div className='content-height'>
            <TabsLinks />
          </div>
        </div>

        <div className='col-3 ps-2 parent-playlist'>
          <PlayList />
        </div>
      </div>
    </CourseProvider>
  );
};

Component.displayName = "CourseDetails";
