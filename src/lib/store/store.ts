import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { imagesApiSlice } from "./images/imagesApiSlice";
import { imageSlice } from "./images/imageSlice";


const rootReducer = combineSlices(imageSlice, imagesApiSlice);

export type RootState = ReturnType<typeof rootReducer>;


export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(imagesApiSlice.middleware);
    },
  });
};


export type AppStore = ReturnType<typeof makeStore>;

export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
