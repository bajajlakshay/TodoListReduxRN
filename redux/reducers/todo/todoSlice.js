import { createSlice,nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos: [{id:1, text: 0.00}],
    Dates: new Date().toLocaleString()
}

export const todoSlice = createSlice({
        name:'todo',
        initialState:initialState,
        reducers:{
            addTodo:(state,action)=>{
                const todo = {
                    id:nanoid(), 
                    text: action.payload
                }
                state.todos.push(todo)
            },
            removeTodo:(state,action)=>{
                state.todos = state.todos.filter((todo)=>(
                    todo.id !== action.payload)
                )  
            },
            updateDate:(state,actions)=>{
                state.Dates = actions.payload
            },
        },
        
})

export const {addTodo,removeTodo,updateTodo,updateDate} = todoSlice.actions;
export default todoSlice.reducer;