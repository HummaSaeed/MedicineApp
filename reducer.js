import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice'; // Assuming you have an auth slice
import profileReducer from './auth/ProfileSlice';
import appointmentsReducer from './auth/appointmentSlice'

const rootReducer = combineReducers({
  auth: authReducer,
  profile:profileReducer,
  appointments: appointmentsReducer,
  // Add other reducers here if you have more slices
});

export default rootReducer;
