import { createSlice } from '@reduxjs/toolkit';

const zoomSlice = createSlice({
    name : 'zoom',
    initialState : {
        zoomed : false,
    },
    reducers : {
        toggleZoom : (state) => {
            state.zoomed = !state.zoomed
        }
    }
})

export const { toggleZoom } = zoomSlice.actions;
export default zoomSlice.reducer;