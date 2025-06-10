import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../config/firebase"; // update path as needed

export const createFolder = createAsyncThunk(
  "fileAndFolder/createFolder",
  async (folderData, thunkAPI) => {
    try {
      const docRef = await addDoc(collection(db, "Folder"), folderData); // Adds to top-level "folders"
      return { id: docRef.id, ...folderData }; // Return new folder object
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const getFolders = createAsyncThunk(
  "fileAndFolder/getFolders",
  async (userId, thunkAPI) => {
    try {
      const foldersSnapshot = await getDocs(collection(db, "Folder"));
      const folders = foldersSnapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(folder => folder.userId === userId); // Filter for this user

      return folders;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


const fileFolderSlice = createSlice({
  name: "fileAndFolder",
  initialState: {
    isLoading: false,
    currentFolder: "root", 
    userFiles: [],
    userFolders: [],
    adminFolders: [],
    adminFiles: [], 
    createFolder: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    // Set current folder
    setCurrentFolder: (state, action) => {
      state.currentFolder = action.payload;
    },

    // Set user files/folders
    setUserFiles: (state, action) => {
      state.userFiles = action.payload;
    },
    setUserFolders: (state, action) => {
      state.userFolders = action.payload;
    },

    // Set admin files/folders
    setAdminFiles: (state, action) => {
      state.adminFiles = action.payload;
    },
    setAdminFolders: (state, action) => {
      state.adminFolders = action.payload;
    },

    // Add new file/folder (user)
    addUserFile: (state, action) => {
      state.userFiles.push(action.payload);
    },
    addUserFolder: (state, action) => {
      state.userFolders.push(action.payload);
    },

    // Delete user file/folder by ID
    deleteUserFile: (state, action) => {
      state.userFiles = state.userFiles.filter(file => file.id !== action.payload);
    },
    deleteUserFolder: (state, action) => {
      state.userFolders = state.userFolders.filter(folder => folder.id !== action.payload);
    },

    // Reset all state (optional)
    resetFileFolderState: () => ({
      isLoading: false,
      currentFolder: "",
      userFiles: [],
      userFolders: [],
      adminFiles: [],
      adminFolders: [],
    }),
  },

  extraReducers: (builder) => {
    builder
      .addCase(createFolder.fulfilled, (state, action) => {
        state.userFolders.push(action.payload);
      })
      .addCase(createFolder.rejected, (state, action) => {
        state.error = action.payload;
      })
      
      .addCase(getFolders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFolders.fulfilled, (state, action) => {
        state.userFolders = action.payload;
        state.isLoading = false;
      })
      .addCase(getFolders.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export default fileFolderSlice.reducer;
export const { setLoading, setCurrentFolder, setUserFiles, setUserFolders, setAdminFiles, setAdminFolders  , addUserFile, addUserFolder, deleteUserFile, deleteUserFolder} = fileFolderSlice.actions
