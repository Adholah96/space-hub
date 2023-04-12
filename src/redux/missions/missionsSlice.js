import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';

export const getMissions = createAsyncThunk('missions/getMissions', async () => {
  const response = await axios.get(url);
  return response.data;
});

const initialState = {
  missions: [],
};

export const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  isLoading: true,
  error: false,
  reducers: {

    joinMission: (state, { payload }) => {
      const updatedMissions = state.missions.map((mission) => {
        if (mission.mission_id === payload) {
          return { ...mission, reserved: true };
        }
        return mission;
      });
      return { ...state, missions: updatedMissions };
    },
    leaveMission: (state, { payload }) => {
      const updatedMissions = state.missions.map((mission) => {
        if (mission.mission_id === payload) {
          return { ...mission, reserved: false };
        }
        return mission;
      });
      return { ...state, missions: updatedMissions };
    },
  },
  extraReducers(builder) {
    builder.addCase(getMissions.fulfilled, (state, action) => ({
      ...state,
      missions: action.payload,
      isLoading: false,
    }));
    builder.addCase(getMissions.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(getMissions.rejected, (state) => ({
      ...state,
      error: true,
    }));
  },
});

export const { joinMission, leaveMission } = missionsSlice.actions;

export default missionsSlice.reducer;
