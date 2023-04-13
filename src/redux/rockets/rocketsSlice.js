import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v4/rockets';

export const getRockets = createAsyncThunk('rockets/get', async () => {
  const response = await axios.get(url);
  return response.data;
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: [],
  reducers: {
    makeReservations(state, action) {
      return state.map((rocket) => {
        if (rocket.id !== action.payload) {
          return { ...rocket };
        }
        return { ...rocket, reserved: true };
      });
    },
    cancelReservations(state, action) {
      return state.map((rocket) => {
        if (rocket.id !== action.payload) {
          return { ...rocket };
        }
        return { ...rocket, reserved: false };
      });
    },
  },
  extraReducers(builder) {
    builder.addCase(getRockets.fulfilled, (state, action) => {
      const newState = state;
      Object.entries(action.payload).forEach((item) => {
        newState.push({
          id: item[1].id,
          name: item[1].name,
          description: item[1].description,
          flickr_image: item[1].flickr_images[0],
          reserved: false,
        });
      });
      return newState;
    });
  },
});

export const { cancelReservations, makeReservations } = rocketsSlice.actions;

export default rocketsSlice.reducer;
