
const initialState={
    list:[],
};

export const todoReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "ADD_TODO":
            return{...state,list:[...state.list,{...action.payload}]}
           
         case "DELETE_TODO":
            return{...state,list:[...state.list.filter((item)=>item.id !==action.payload)]}

         case "UPDATE_TODO":
             return {...state,list:[...state.list.map(item=>item.id===action.payload.id? action.payload:item)]};    
    
        case "START_TODO":
            return{...state,list:[...state.list.map(item=>item.id===action.payload.id?{...action.payload,status:"In process"}:item)]}
          
         case "STOP_TODO":
             return{...state,list:[...state.list.map(item=>item.id===action.payload.id?{...action.payload,status:"On Hold"}:item)]}

         case "DONE_TODO":
             return{...state,list:[...state.list.map(item=>item.id===action.payload.id?{...action.payload,status:"DONE"}:item)]}    
        
        default:
           return {list:[]}
    }

}