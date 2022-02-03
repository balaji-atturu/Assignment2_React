import React from "react";
import {AiFillCloseCircle} from "react-icons/ai"
import {BsFillCheckSquareFill} from "react-icons/bs"
export default function TodoItem(props){
    const {todo, removeTodo,completeTodo}  = props
    return (
        <div className={todo.completed ? "todo-row complete" : "todo-row"}>
{props.todo.text}
<div className="iconsContainer">
<AiFillCloseCircle className="icon" style={{marginRight:4}} onClick={()=>removeTodo(todo.id)}/>
<BsFillCheckSquareFill onClick={()=>completeTodo(todo.id)} />
</div>

        </div>
    )
}