import {Collapse, Typography} from "@mui/material";

import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import useCourseOperation from "../../hooks/useCourseOperation";

interface IProps {
  expanded: boolean;
  items: ISection["items"];
  currentVideo: number;
}
function PlayListVideoItem({expanded, items, currentVideo}: IProps) {
  const {handelAddVideoIdInParams} = useCourseOperation();
  return (
    <Collapse in={expanded} timeout='auto' unmountOnExit>
      <ul className='time-line position-relative'>
        {items.map((item) => (
          <div
            key={item.id}
            className={`${currentVideo == item.id && "active"}`}
            onClick={() => handelAddVideoIdInParams(item.id)}
            style={{cursor: "pointer"}}
          >
            <li className='d-flex justify-content-between align-items-center'>
              <PlayCircleFilledIcon fontSize='small' className='video-icon' />
              <div>
                <Typography variant='body2' sx={{opacity: currentVideo == item.id ? 1 : 0.5}}>
                  {item.name}
                </Typography>
                <Typography variant='body2' className='text-muted'>
                  {item.duration}
                </Typography>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </Collapse>
  );
}

export default PlayListVideoItem;
