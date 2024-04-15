// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setAuthenticated(state, action) {
      state.isAuthenticated = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    clearMessages: (state) => {
      state.message = null;
      state.error = null;
    },
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
  },
});

export const {
  setLoading,
  setError,
  setAuthenticated,
  setUser,
  clearMessages,
  setSuccess
} = authSlice.actions;

export default authSlice.reducer;
