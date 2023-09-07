import {store} from '../src/store/index';

export type Quest = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: string;
  type: string;
  peopleMinMax: number[];
}

export type DetailedQuest = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: string;
  type: string;
  peopleMinMax: number[];
  description: string;
  coverImg: string;
  coverImgWebp: string;
}

export type DataProcess = {
  quests: Quest[];
  detailedQuest: DetailedQuest;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
