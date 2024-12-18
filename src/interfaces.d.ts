interface INote {
  id: string;
  note: string;
}

interface IFaq {
  id: number;
  question: string;
  answer: string;
}

interface ICourse {
  title: string;
  description: string;
  sections: ISection[];
  notes: INote[];
  faqs: IFaq[];
  students: number;
  level: string;
  poster: string;
}

interface ISection {
  id: number;
  title: string;
  items: IItem[];
}

interface IItem {
  id: number;
  name: string;
  duration: string;
  completed: boolean;
  sectionId: number;
  video: string;
}
