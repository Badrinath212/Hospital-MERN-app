import { createSlice } from "@reduxjs/toolkit";

const editModeSlice = createSlice({
    name:"editMode",
    initialState:{
        isEditMode:false,
        editDoctor:null,
        isDeleteMode:false,
        deleteDoctor:null
    },
    reducers:{
        seteditMode:(state)=>{
            state.isEditMode=true;
        },
        seteditDoctor:(state,action)=>{
            state.editDoctor=action.payload;
        },
        setDeleteMode:(state)=>{
            state.isDeleteMode=true;
        },
        setDeleteDoctor:(state,action)=>{
            state.deleteDoctor=action.payload;
        }
    }
});
export const {seteditMode,seteditDoctor, setDeleteMode, setDeleteDoctor}=editModeSlice.actions;
export default editModeSlice.reducer;