'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    color: '#fff',
};

export const colorReducer = createSlice({
    name: 'color',
    initialState,
    reducers: {
        setColor: (state, action) => {
            state.color = action.payload;
        },
    },
});

export const { setColor } = colorReducer.actions;

export default colorReducer.reducer;
