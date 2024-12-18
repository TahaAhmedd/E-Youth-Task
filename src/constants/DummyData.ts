import Announcements from "@/modules/course-details/components/Announcements";

import Faqs from "@/modules/course-details/components/Faqs";

import Notes from "@/modules/course-details/components/notes/Notes";

import OverView from "@/modules/course-details/components/OverView";

import {EnumTabsLinks} from "@/enums";

export const tabsData: EnumTabsLinks[] = [
  EnumTabsLinks.OVERVIEW,
  EnumTabsLinks.NOTES,
  EnumTabsLinks.ANNOUNCEMENTS,
  EnumTabsLinks.FAQs,
];

export const TabsCompnents: {[key in EnumTabsLinks]: () => JSX.Element} = {
  overview: OverView,
  notes: Notes,
  Announcements: Announcements,
  faqs: Faqs,
};
