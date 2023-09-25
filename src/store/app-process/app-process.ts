import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const/const';


type AppProcess = {
  error: string | null;
  questType: string;
}

const initialState: AppProcess = {
  error: null,
  questType: 'all-quests',
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    clearError: (state, action: PayloadAction<{message: string | null; delay: number}>) => {
      state.error = action.payload.message;
    },
    changeQuestType: (state, action: PayloadAction<string>) => {
      state.questType = action.payload;
    }
  }
});

export const {setError, clearError, changeQuestType} = appProcess.actions;
