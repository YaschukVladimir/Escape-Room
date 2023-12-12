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
  bookingInfo: BookingInfo[];
  isBookingInfoLoaded: boolean;
  selectedQuestPlaceId: string;
  selectedQuestPlace: BookingInfo;
  questFormData: QuestFormData;
  reservedQuests: ReservedQuest[];
  questType: string;
}

export type QuestFormData = {
  date: string;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  placeId: string;
};

export type PostData = {
  postData: QuestFormData;
  id: string;
}

export type UserData = {
  email: string;
  token: string;
}

export type AuthData = {
  email: string;
  password: string;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type Location = {
  address: string;
  coords: number[];
}

export type QuestTime = {
  time: string;
  isAvailable: boolean;
}

export type Slot = {
  today: QuestTime[];
  tomorrow: QuestTime[];
}

export type BookingInfo = {
  id: string;
  location: Location;
  slots: Slot;
  }

export type ReservedQuest = {
      date: string;
      time: string;
      contactPerson: string;
      phone: string;
      withChildren: boolean;
      peopleCount: number;
      id: string;
      location: Location;
      quest: Quest;
  }

