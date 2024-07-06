import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ImageState {
    activeImage: string|null
}

const initialState: ImageState = {
    activeImage: null
}

export const imageSlice = createSlice({
    name: "activeImage",
    initialState,
    reducers: {
        

        setActive:(state, action:PayloadAction<string>)=>{
            state.activeImage= action.payload
        }
    }

})

// export actions

export const {setActive} = imageSlice.actions

export default imageSlice.reducer