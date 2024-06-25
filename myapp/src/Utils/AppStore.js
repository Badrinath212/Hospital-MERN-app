import {configureStore} from "@reduxjs/toolkit";
import DataSlice from "./DataSlice";
import EditModeSlice from "./EditModeSlice";

const AppStore=configureStore({
    reducer:{
        hospitalData:DataSlice,
        edit:EditModeSlice
    }
})

export default AppStore;