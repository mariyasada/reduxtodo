import uniqid from "uniqid";

export const addTodo=(data)=>{
    if(data ==="")
    {
        console.error("CAN'T BE EMPTY");
    }
    else{
      return {type:"ADD_TODO",payload:{
        id:uniqid.time(),
        data:data,
        status:"pending"
    }}
    }
    
}

export const updateTodo=(item)=>{    
    return {type:"UPDATE_TODO",payload:item}
}

export const deleteTodo=(id)=>{
    return {type:"DELETE_TODO",payload:id}
}

export const startTodo=(item)=>{
  return {type:"START_TODO",payload:item}
}

export const stopTodo=(item)=>{
    return  {type:"STOP_TODO",payload:item}
}
export const completeTodo=(item)=>{
  return {type:"DONE_TODO",payload:item}
}
