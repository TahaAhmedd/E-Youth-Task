import {Box} from "@mui/material";

import {useState} from "react";

import PlayListItemHeader from "./PlayListItemHeader";

import PlayListVideoItem from "./PlayListVideoItem";
import useCourseOperation from "../../hooks/useCourseOperation";

const PlayListItem = (section: ISection) => {
  const {currentVideo} = useCourseOperation();

  const isCurrentSection = currentVideo?.sectionId === section.id;
  const [expanded, setExpanded] = useState(isCurrentSection);

  // Function to toggle the section collapse
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const completedItems = section.items.filter((item) => item.completed).length;

  return (
    <Box>
      {/* Section Header */}
      <PlayListItemHeader
        expanded={expanded}
        handleExpandClick={handleExpandClick}
        completedItems={completedItems}
        section={section}
      />

      {/* Collapsible Section Content */}
      <PlayListVideoItem items={section.items} expanded={expanded} currentVideo={currentVideo.id} />
    </Box>
  );
};

export default PlayListItem;
