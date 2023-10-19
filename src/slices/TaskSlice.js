import { createSlice } from '@reduxjs/toolkit'

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
            const { title, description, id, isCompleted } = action.payload;
            const todoToEdit = state.tasks.find((task) => task.id === id);
            if (todoToEdit) {
                todoToEdit.title = title;
                todoToEdit.description = description
                todoToEdit.isCompleted = isCompleted
            }
        },
        deleteTask: (state, action) => {
            const { task } = action.payload
            state.tasks.splice(task,1)
        }
    },
})

// Action creators are generated for each case reducer function
export const { editTask, deleteTask, Addtask } = TaskSlice.actions;

export default TaskSlice.reducer