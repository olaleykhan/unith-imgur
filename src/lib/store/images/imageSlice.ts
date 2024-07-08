import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ImageState {
    active: number|null
}

const initialState: ImageState = {
    active: null
}

export const imageSlice = createSlice({
    name: "image",
    initialState,
    reducers: {
        

        setActive:(state, action:PayloadAction<number>)=>{
            state.active= action.payload
        }
    }

})

// export actions

export const {setActive} = imageSlice.actions

export default imageSlice.reducer