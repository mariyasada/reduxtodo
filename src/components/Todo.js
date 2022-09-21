import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, completeTodo, deleteTodo, startTodo, stopTodo, updateTodo } from '../actions'


export const Todo = () => {
    const [todo,setTodo]=useState("");
    const [isEditing,setIsEditing]=useState(false);
    const [editItem,setEditItemId]=useState("");
    const dispatch=useDispatch();
    const todoList=useSelector(state=>state.todoReducer);

    const editData=(item)=>{
     setIsEditing(true);
     setTodo(item.data);
     if(item.data==="")
     {
        console.log("can't be empty")
     }
     setEditItemId(item) 
    }

    const updateTodofunc=()=>{
     const newData={...editItem,data:todo}
      dispatch(updateTodo(newData));
     setIsEditing(false);
     setTodo("");
    }


    const saveTodo=()=>{
        if(todo==="")
     {
        console.log("can't be empty")
     }else{
        dispatch(addTodo(todo));
            setTodo("");
     }
    }

  return (
    <div className='page-container'>
    <div className='todo-container'>
        <input type="text" onChange={(e)=>setTodo(e.target.value)} name="content" id="content" value={todo}/>
        <div className='btn-container'> 
        <button onClick={()=>setTodo("")}>Reset</button>       
        <button onClick={isEditing ?updateTodofunc: saveTodo}>{isEditing?"Update":"Save"}</button>
        </div>
    </div>
        <div>
            {todoList.list.length>0 && todoList.list.map((item)=>{
                return(
                <div key={item.id} className="container">
                    <p>{item.data}</p>
                    <span style={{backgroundColor:item.status==="DONE"?"green":"yellow"}}>{item.status}</span>
                    <button onClick={()=>dispatch(startTodo(item))}>Start</button>
                    <button onClick={()=>dispatch(stopTodo(item))}>Stop</button>
                    <button onClick={()=>dispatch(completeTodo(item))}>done</button>
                    <button onClick={()=>editData(item)}>edit</button>
                    <button onClick={()=>dispatch(deleteTodo(item.id))}>delete</button>
                </div>)
            })}
        </div>
    
    </div>
  )
}


