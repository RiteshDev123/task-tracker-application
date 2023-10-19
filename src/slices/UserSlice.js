import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {},
}

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        authenticateUser: (state, action) => {
            state.user = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { authenticateUser } = UserSlice.actions;

export default UserSlice.reducer