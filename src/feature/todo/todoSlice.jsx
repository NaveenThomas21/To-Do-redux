import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    todos :[]
}

const todoSlice = createSlice({
name:'todo',
initialState,
    reducers:{
        addTodo :(state,action)=>{
            state.todos.push({
                id:Date.now(),
                text:action.payload,    
                comlpleted:false
            })
        },
        toggleTodo :(state,action)=>{
            const todo =state.todos.find((todo)=> todo.id === action.payload)
        if(todo){
            todo.comlplete=!todo.comlpleted

        }
    },
    deleteTodo :(state,action)=>{
        state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
    }
}
    
})
export const {addTodo,toggleTodo,deleteTodo}=todoSlice.actions
export default todoSlice.reducer