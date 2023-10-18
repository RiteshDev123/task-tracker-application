import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tasks: [
        {
            "id": 1,
            "title": 'this is',
            "description": 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est voluptas nisi neque molestias! Repudiandae quia ab impedit dolore dolorem tempore',
            "last Date": '29/20/2024',

        },
        {
            "id": 2,
            "title": 'to do',
            "description": 'this is the description',
            "last Date": '29/20/2024',
        },

    ],
}

export const TaskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        Addtask: (state, payload) => {
          
        },
        editTask: (state) => {
            state.value += 1
        },
        deleteTask: (state, payload) => {
            

        }
    },
})

// Action creators are generated for each case reducer function
export const { editTask, deleteTask } = TaskSlice.actions;

export default TaskSlice.reducer