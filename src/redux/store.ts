'use client';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import colorReducer from './reducers/colorReducer';

const rootReducer = combineReducers({
    color: colorReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});
