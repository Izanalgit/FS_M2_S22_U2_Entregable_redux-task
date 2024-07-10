import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks:[]
};

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const { newTask } = action.payload;

            const tasks = [...state.tasks];
            state.tasks = [...tasks,newTask];
        },
        deleteTask: (state, action) => {
            const { idTask } = action.payload;

            const delTaskByID = (tasks) => tasks.id != idTask;
            
            const tasks = [...state.tasks];
            state.tasks = tasks.filter(delTaskByID);
        },
    },
});

export const { addTask, deleteTask } = todosSlice.actions;
export default todosSlice.reducer;
