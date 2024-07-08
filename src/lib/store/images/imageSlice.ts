import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ImageState {
    active: number|null,
    currentPage: number,
    itemsPerPage: number,
    // paginatedItems: [],
}

const initialState: ImageState = {
    active: null,
    currentPage: 1,
    itemsPerPage: 10,
}

export const imageSlice = createSlice({
    name: "image",
    initialState,
    reducers: {
        

        setActive:(state, action:PayloadAction<number>)=>{
            state.active= action.payload
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload
        },
    }

})

// export actions

export const {setActive, setCurrentPage} = imageSlice.actions

export default imageSlice.reducer