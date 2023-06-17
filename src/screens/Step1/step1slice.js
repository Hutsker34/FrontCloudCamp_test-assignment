import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  
};

export const step1slice = createSlice({
  name: "article",
  initialState,
  reducers: {
    
        openModal: (state) => {
            state.visible = true
    },
        closeModal: (state) => {
            state.visible = false
    }
    
    }
});

export const {closeModal, openModal} = step1slice.actions;

export default step1slice.reducer;
