import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const/const';
import { BookingInfo, DataProcess, DetailedQuest, QuestFormData} from '../../types';
import { fetchBookingQuestInfo, fetchDetailedQuest, fetchQuestsAction, fetchReservedQuests } from '../api-actions';

const initialDetailedQuest: DetailedQuest = {
  id: '',
  title: '',
  previewImg: '',
  previewImgWebp: '',
  level: '',
  type: '',
  peopleMinMax: [],
  description: '',
  coverImg: '',
  coverImgWebp: '',
};

const initialQuestPlace: BookingInfo = {
  id: '',
  location: {
    coords: [],
    address: ''
  },
  slots: {
    today: [],
    tomorrow:[],
  }
};

const initialFormData: QuestFormData = {
  date: '',
  time: '',
  contactPerson: '',
  phone: '',
  withChildren: false,
  peopleCount: 0,
  placeId: '',
};

const initialState: DataProcess = {
  quests: [],
  detailedQuest: initialDetailedQuest,
  bookingInfo: [],
  isBookingInfoLoaded: false,
  selectedQuestPlaceId: '',
  selectedQuestPlace: initialQuestPlace,
  questFormData: initialFormData,
  reservedQuests: [],
};


export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    setQuestPlaceId: (state, action: PayloadAction<string>) => {
      state.selectedQuestPlaceId = action.payload;
    },
    setSelectedQuestPlace: (state, action: PayloadAction<BookingInfo>) => {
      state.selectedQuestPlace = action.payload;
    },
    setFormDate: (state, action: PayloadAction<string>) => {
      state.questFormData.date = action.payload;
    },
    setFormTime: (state, action: PayloadAction<string>) => {
      state.questFormData.time = action.payload;
    },
    setFormPerson: (state, action: PayloadAction<string>) => {
      state.questFormData.contactPerson = action.payload;
    },
    setFormPhone: (state, action: PayloadAction<string>) => {
      state.questFormData.phone = action.payload;
    },
    setFormChildren: (state) => {
      state.questFormData.withChildren = !state.questFormData.withChildren;
    },
    setFormPeopleCount: (state, action: PayloadAction<number>) => {
      state.questFormData.peopleCount = action.payload;
    },
    setFormPlaceId: (state, action: PayloadAction<string>) => {
      state.questFormData.placeId = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchQuestsAction.fulfilled, (state, action) => {
        state.quests = action.payload;
      })
      .addCase(fetchDetailedQuest.fulfilled, (state, action) => {
        state.detailedQuest = action.payload;
      })
      .addCase(fetchBookingQuestInfo.fulfilled, (state, action) => {
        state.bookingInfo = action.payload;
        state.isBookingInfoLoaded = true;
      })
      .addCase(fetchBookingQuestInfo.pending, (state) => {
        state.isBookingInfoLoaded = false;
      })
      .addCase(fetchReservedQuests.fulfilled, (state, action) => {
        state.reservedQuests = action.payload;
      });
  }
});

export const {setQuestPlaceId, setSelectedQuestPlace, setFormChildren,
  setFormDate, setFormPeopleCount, setFormPerson, setFormPhone, setFormPlaceId, setFormTime} = dataProcess.actions;
