import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Channel } from '../../components/InterFace/Channelinterface';

interface RadioState {
  channels: Channel
}


const initialState: RadioState = {
  channels: {name: '', channel:  ''}
};


export const RadioWidgetSlice = createSlice({
  name: 'RadioWidget',
  initialState,

  reducers: {
    setchannel: (state, action: PayloadAction<Channel>) => {
      state.channels = action.payload
    },
  },

  extraReducers: (builder) => {
    // builder
    //   .addCase(incrementAsync.pending, (state) => {
    //     state.status = 'loading';
    //   })
  },
});

export const { setchannel } = RadioWidgetSlice.actions;


export default RadioWidgetSlice.reducer;
