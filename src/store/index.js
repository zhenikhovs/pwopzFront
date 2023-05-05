import {configureStore} from "@reduxjs/toolkit";
import usersSlice from './users/slice';

const Store = configureStore({
    reducer: {
        usersSlice
    }
})

export default Store;
