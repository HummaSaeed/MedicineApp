// appointmentsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAppointments = createAsyncThunk(
  'appointments/fetchAppointments',
  async (doctorId, { getState, rejectWithValue }) => {
    const { auth } = getState();
    
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("token", `${auth.user.accessToken}`); // Use Bearer if using token-based auth

    try {
      const response = await fetch(`https://family-dr.vercel.app/api/appointments?pageSize=50&page=1&doctorId=${doctorId}`, {
        method: "GET",
        headers: myHeaders
      });

      if (!response.ok) throw new Error('Failed to fetch appointments');

      const data = await response.json();
      
      return data.data;
    } catch (error) {
      console.error("Error fetching appointments:", error);
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  data: null,
  status: 'idle',
  error: null
};

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAppointments.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAppointments.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload; // Storing the appointments data
      })
      .addCase(fetchAppointments.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default appointmentsSlice.reducer;
