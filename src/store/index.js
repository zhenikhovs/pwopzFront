import {configureStore} from "@reduxjs/toolkit";
import userSlice from './users/slice';

const Store = configureStore({
    reducer: {
        userSlice
    }
})

export default Store;
