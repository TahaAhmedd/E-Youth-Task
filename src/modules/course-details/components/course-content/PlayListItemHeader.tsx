import {Box, IconButton, Typography} from "@mui/material";

import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";

interface IProps {
  expanded: boolean;
  handleExpandClick: () => void;
  completedItems: number;
  section: ISection;
}
function PlayListItemHeader({expanded, handleExpandClick, completedItems, section}: IProps) {
  return (
    <Box className='d-flex justify-content-between align-items-center p-2 py-1 bg-secondry bg-gradient text-color'>
      <div className='d-flex align-items-center'>
        <PlayCircleOutlineIcon className='me-2' />

        <div className='d-flex flex-column'>
          <Typography variant='subtitle1' sx={{fontWeight: "600", fontSize: "16px"}}>
            {section.title}
          </Typography>

          <Typography color='textSecondary' sx={{fontSize: "12px"}}>
            {`${completedItems} / 
            ${section.items.length} | ${section.items.length * 2}min`}
          </Typography>
        </div>
      </div>

      <IconButton onClick={handleExpandClick}>
        {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconButton>
    </Box>
  );
}

export default PlayListItemHeader;
