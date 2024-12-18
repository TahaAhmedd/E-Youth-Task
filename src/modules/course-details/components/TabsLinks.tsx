import {useState} from "react";

import Tabs from "@mui/material/Tabs";

import Tab from "@mui/material/Tab";

import Box from "@mui/material/Box";

import {TabsCompnents, tabsData} from "@/constants/DummyData";

import {EnumTabsLinks} from "@/enums";

import {motion} from "motion/react";

import "../style/tabs.css";

export default function TabsLinks() {
  const [value, setValue] = useState(tabsData[0]);

  const handleChange = (_: React.SyntheticEvent, newValue: EnumTabsLinks) => {
    setValue(newValue);
  };

  const RenderActiveTab = TabsCompnents[value];

  return (
    <Box sx={{maxWidth: "100%", bgcolor: "background.paper"}}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant='scrollable'
        scrollButtons='auto'
        indicatorColor={"" as unknown as undefined}
      >
        {tabsData.map((tab) => (
          <Tab label={tab} className='custom-tab' key={tab} value={tab} />
        ))}
      </Tabs>

      <Box
        className='bg-secondry px-2 py-4 rounded-bottom-5'
        sx={{minHeight: "calc(100vh - var(--header-height) - var(--video-height) - 48px)"}}
      >
        <motion.div
          animate={{opacity: 1, transition: {duration: 0.5}}}
          initial={{opacity: 0}}
          key={value}
        >
          <RenderActiveTab />
        </motion.div>
      </Box>
    </Box>
  );
}
