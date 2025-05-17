import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fileFolderSlice = createSlice({
  name: "fileAndFolder",
  initialState: {
    isLoading: false,
    currentFolder: "",
    userFiles: [],
    userFolders: [],
    adminFolders: [],
    adminFiles: [],
  },
  reducers: {
    // Loading state toggle
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
});

export default fileFolderSlice.reducer;
export const {setLoading, setCurrentFolder, setUserFiles, setUserFolders, setAdminFiles, setAdminFolders  , addUserFile, addUserFolder, deleteUserFile, deleteUserFolder} = fileFolderSlice.actions
