const reducer =(state, action)=>{
      
    if(action.type === "HOME_UPDATE"){
      return{
        ...state,
        name:action.payload.name,
        Image:action.payload.Image, 
      };
    }
      if(action.type === "ABOUT_UPDATE"){
        return{
          ...state,
          name:action.payload.name,
          Image:action.payload.Image, 
        };          
    } 
    if(action.type === "GET_SERVICES"){
      return{
        ...state,
        srvices:action.payload,  
      };          
  } 


    return state; 
};
export default reducer;