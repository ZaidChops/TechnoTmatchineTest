import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allData: [],
  editList: { data: "", isEdit: false },
};

export const dataSlice = createSlice({
  name: "Grocery_DATA",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.allData = [action.payload, ...state.allData];
    },

    deleteData: (state, action) => {
      state.allData = state.allData.filter((item) => {
        if (item.id !== action.payload) return item;
      });
    },

    editData: (state, action) => {
      state.editList = { data: action.payload, isEdit: true };
    },

    updateData: (state, action) => {
      state.allData = state.allData.map((i) => {
        if (i.id === action.payload.id) {
          return action.payload;
        } else {
          return i;
        }
      });
      state.editList = { data: "", isEdit: false };
    },
    
    allDelete: (state, action) => {
      state.allData = [];
    },
  },
});

export const { addData, deleteData, editData, updateData, allDelete } =
  dataSlice.actions;
export default dataSlice.reducer;
