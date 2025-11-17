import { configureStore } from "@reduxjs/toolkit";
import zoomReducer from '../slice/zoomReducer'

export const store = configureStore({
    reducer : {
        zoom : zoomReducer
    }
})