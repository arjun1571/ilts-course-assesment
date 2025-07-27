export interface IChecklistItem {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

export interface IChecklist {
  checklist: IChecklistItem[];
}

interface IInstructor {
  description: string;
  has_instructor_page: boolean;
  image: string;
  name: string;
  short_description: string;
  slug: string;
}

export interface IInstructorsSection {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: IInstructor[];
}

interface IFeatureItem {
  icon: string;
  id: string;
  subtitle: string;
  title: string;
}

export interface IFeaturesSection {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: IFeatureItem[];
}

interface IPointerItem {
  color: string;
  icon: string;
  id: string;
  text: string;
}

export interface IPointersSection {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: IPointerItem[];
}

interface IFeatureExplanationItem {
  checklist: string[];
  file_type: string;
  file_url: string;
  id: string;
  title: string;
  video_thumbnail: string;
}

export interface IFeatureExplanationsSection {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: IFeatureExplanationItem[];
}

interface IAboutItem {
  description: string;
  icon: string;
  id: string;
  title: string;
}

export interface IAboutSection {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: IAboutItem[];
}
