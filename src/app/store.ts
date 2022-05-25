import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import  RadioWidgetReducer  from '../features/RadioWidget/RadioWidgetSlice'

export const store = configureStore({
  reducer: {
    radioStore: RadioWidgetReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
