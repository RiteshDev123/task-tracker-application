import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
    tasks: [],
}

export const TaskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        Addtask: (state, action) => {
            state.tasks.push(action.payload)
        },
        editTask: (state, action) => {
            const { title, description, id } = action.payload;
            const todoToEdit = state.tasks.find((task) => task.id === id);
            if (todoToEdit) {
                todoToEdit.title = title;
                todoToEdit.description = description
            }
        },
        deleteTask: (state, action) => {
            const { index } = action.payload
            console.log(action.payload)
            state.tasks.splice(index, 1);

        }
    },
})

// Action creators are generated for each case reducer function
export const { editTask, deleteTask, Addtask } = TaskSlice.actions;

export default TaskSlice.reducer