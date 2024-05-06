import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Asynchronously update the profile on the server
export const updateProfile = createAsyncThunk(
  'profile/updateProfile',
  async (profileData, { getState }) => {
    const { auth } = getState(); // Access the auth state to retrieve the token
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    console.log("user token is")
    console.log(auth.user.token)
    myHeaders.append("token", auth.user.accessToken); // Use the token from auth state

    const body = JSON.stringify({
      name: profileData.name || "Default Name",
      firstTime: profileData.firstTime || "No",
      myDetails: profileData.myDetails || "No details provided",
      ageGroup: profileData.ageGroup || "Adult",
      gender: profileData.gender || "Not specified",
      sessionType: profileData.sessionType || "In-person",
      primaryConcern: profileData.primaryConcern || "General",
      userId: profileData.userId || "defaultUserId",
      role: profileData.role || "Patient"
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: body,
      redirect: "follow"
    };

    const response = await fetch("https://family-dr.vercel.app/api/profile", requestOptions);
    if (!response.ok) {
      throw new Error('Failed to update the profile');
    }
    console.log(response);
    return response.json();
  }
);

const initialState = {
  profileData: null, // Will store the whole response object or array
  status: 'idle',
  error: null
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    resetProfile: (state) => {
      state.profileData = null;
      state.status = 'idle';
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateProfile.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.profileData = action.payload; // Storing the entire response
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { resetProfile } = profileSlice.actions;
export default profileSlice.reducer;
