// authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../config/firebase"; // adjust the path as needed
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

// Async Thunks
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ name, email, password }, thunkAPI) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      const user = userCredential.user; // ✅ Define 'user' here

      await updateProfile(user, {
        displayName: name,
      });

      return {
        email: user.email,
        uid: user.uid,
        displayName: user.displayName, // This now includes the updated name
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password, name }, thunkAPI) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      await updateProfile(userCredential.user, {
        displayName: name,
      });

      return {
        email: userCredential.user.email,
        uid: userCredential.user.uid,
        displayName: name,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const observeUser = (callback) => {
  return onAuthStateChanged(auth, (user) => {
    if (user) {
      callback(user);
    } else {
      callback(null);
    }
  });
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
    isAuthenticated: false
  },
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;

    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logoutUser, setUser } = authSlice.actions;
export default authSlice.reducer;
