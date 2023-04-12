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
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getRockets.fulfilled, (state, action) => {
      const newState = state;
      Object.entries(action.payload).forEach((item) => {
        newState.push({
          id: item[1].id,
          name: item[1].rocket_name,
          description: item[1].description,
          flickr_image: item[1].flickr_image[0],
          reserved: false,
        });
      });
      return newState;
    });
  },
});

export default rocketsSlice.reducer;
