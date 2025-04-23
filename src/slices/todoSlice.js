import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    value: [],
    inputValue:""
  },
  reducers: {
    setInputValue: (state, action) => {
        state.inputValue = action.payload
      },
      addTodo: (state) => {
        if(state.inputValue !== ""){
          state.value.push(state.inputValue)
          state.inputValue=""
        }
      },
      removeTodo:(state,action)=>{
        state.value.splice(action.payload,1)
      }
  }
})

export const { setInputValue, addTodo ,removeTodo } = todoSlice.actions

export default todoSlice.reducer