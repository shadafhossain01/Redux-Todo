import { useDispatch, useSelector } from "react-redux"
import {addTodo ,removeTodo,setInputValue} from "./slices/todoSlice"
function App() {
  const dispatch = useDispatch()
  const value=useSelector((state)=>state.todo.value)
  const inputValue=useSelector((state)=>state.todo.inputValue)
  return (
    <div className="todo-container">
      <h1>Todo App</h1>
      <div className="main">
      <input type="text" value={inputValue} onChange={(e)=>dispatch(setInputValue(e.target.value))}/>
      <button onClick={()=>dispatch(addTodo())} className="addBtn">Add Todo</button>
      </div>
      <ul>
        {
          value.map((item,idx)=>(
            <li key={idx} >{item} <button onClick={()=> dispatch(removeTodo(idx))}> Delete </button></li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
