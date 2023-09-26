import React, { useContext, useEffect, useReducer }  from "react";
import reducer from "./Reducer";
const AppCotext = React.createContext();
const AppProvider = ({children}) =>{
  // const API ="https://thapareactapi.up.railway.app";


  const initialstate={
  name :"",
  Image:"",
  // srvices:[],
  };
const dataupdateHome =()=>{

  return dispatch(
    {
      type:"HOME_UPDATE",
      payload:{

        name:"OTS center",
        Image:"./images/homepro.jpg",
      }
    }
  )
}
const dataupdateAbout =()=>{

  return dispatch(
    {
      type:"ABOUT_UPDATE",
      payload:{

        name:"Abubakar_OTS",
        Image:"./images/homepro.jpg", 
      }
    }
  )
}
  const [state, dispatch] = useReducer(reducer, initialstate);
  
  const getServices = async (url) =>{
    try{
        const res = await fetch (url);
        const data = await res.json();
        dispatch({type:"GET_SERVICES" , payload:data})   

    }catch(error){

      console.log(error); 
    }
  }; 

//call api
// useEffect(()=>{
  
//    getServices(API);  

// },[]);


  return <AppCotext.Provider value={{...state,dataupdateHome,dataupdateAbout }}>{children}</AppCotext.Provider>;

};
//useContext
const UseGlobalContext = () =>{

    return useContext(AppCotext);
}

export {AppCotext, AppProvider, UseGlobalContext };