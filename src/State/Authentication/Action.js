import axios from "axios"
import { ADD_TO_FAVORITE_FAILURE, ADD_TO_FAVORITE_REQUEST, ADD_TO_FAVORITE_SUCCESS, GET_ARTIST_USER_FAILURE, GET_ARTIST_USER_REQUEST, GET_ARTIST_USER_SUCCESS, GET_COLLECTOR_USER_REQUEST, GET_COLLECTOR_USER_FAILURE, GET_COLLECTOR_USER_SUCCESS, LOGIN_ARTIST_FAILURE, LOGIN_ARTIST_REQUEST, LOGIN_ARTIST_SUCCESS, LOGIN_COLLECTOR_FAILURE, LOGIN_COLLECTOR_REQUEST, LOGIN_COLLECTOR_SUCCESS, LOGOUT, LOGOUT_REQUEST, REGISTER_ARTIST_FAILURE, REGISTER_ARTIST_REQUEST, REGISTER_ARTIST_SUCCESS, REGISTER_COLLECTOR_FAILURE, REGISTER_COLLECTOR_REQUEST } from "./ActionTypes"
import {BASE_URL, api} from "../../Config/Config"

export const registerCollector =(reqData)=>async(dispatch)=>{
    dispatch({type:REGISTER_ARTIST_REQUEST})
    try{
        const{data} = await axios.post(`${BASE_URL}//api/v1/artist/register`, reqData.userData)
        if(data.id){
            localStorage.setItem("id",data.id);
            reqData.navigate("/login")
        }
        else{
            reqData.navigate("/")
        }
        dispatch({type:REGISTER_ARTIST_SUCCESS,payload:data.id})
        console.log("Register Success", data)


    }catch(error){
        dispatch({type:REGISTER_ARTIST_FAILURE,payload:error})
        console.log("error",error)
    }
}

export const registerArtist =(reqData)=>async(dispatch)=>{
    dispatch({type:REGISTER_COLLECTOR_REQUEST})
    try{
        const{data} = await axios.post(`${BASE_URL}//api/v1/collector/register`, reqData.userData)
        if(data.id){
            localStorage.setItem("artistId",data.id);
            reqData.navigate("/login")
        }
        else{
            reqData.navigate("/")
        }
        dispatch({type:REGISTER_ARTIST_SUCCESS,payload:data.id})
        console.log("Register Success", data)


    }catch(error){
        dispatch({type:REGISTER_COLLECTOR_FAILURE,payload:error})
        console.log("error",error)
    }
}

export const artistLogin=(reqData)=>async(dispatch)=>{
    dispatch({type:LOGIN_ARTIST_REQUEST})
    try{
        const {data} = await axios.post(`${BASE_URL}/api/v1/collector/login`,reqData.userData)
        if(data.id){localStorage.setItem('artistId',data.id)
            reqData.navigate("/profiles/*")
        }
        
    else{
        reqData.navigate("/")
    }
    dispatch({type:LOGIN_ARTIST_SUCCESS,payload:data.id})
    console.log("login success", data)

}catch(error){
    dispatch({type:LOGIN_ARTIST_FAILURE,payload:error})
    console.log("error", error)
}
}

export const collectorLogin=(reqData)=>async(dispatch)=>{
    dispatch({type:LOGIN_COLLECTOR_REQUEST})
    try{
        const {data} = await axios.post(`${BASE_URL}/api/v1/artist/login`,reqData.userData)
        if(data.id){localStorage.setItem('id',data.id)
            reqData.navigate("/profiles/*")
        }
        
    else{
        reqData.navigate("/")
    }
    dispatch({type:LOGIN_COLLECTOR_SUCCESS,payload:data.id})
    console.log("login success", data)

}catch(error){
    dispatch({type:LOGIN_COLLECTOR_FAILURE,payload:error})
    console.log("error", error)
}
}

export const getCollectorProfile=(jwt)=>async(dispatch)=>{
    dispatch({type:GET_COLLECTOR_USER_REQUEST})
    try{
        const id = localStorage.getItem("id");
        const{data} = await api.get(`/api/v1/collector/login`,{
            Headers:{
                id: `${id}`
            }


        })
        dispatch({type:GET_COLLECTOR_USER_SUCCESS,payload:data})
        console.log("user profile",data)
    }catch(error){
        dispatch({type:GET_COLLECTOR_USER_FAILURE,payload:error})
        console.log("error ",error)
    }
}

export const getArtistProfile=(jwt)=>async(dispatch)=>{
    dispatch({type:GET_ARTIST_USER_REQUEST})
    try{
         const id = localStorage.getItem("artistId");
        const{data} = await api.get(`/api/v1/collector/login`,{
            Headers:{
                id: `${id}`
            }


        })
        dispatch({type:GET_ARTIST_USER_SUCCESS,payload:data})
        console.log("user profile",data)
    }catch(error){
        dispatch({type:GET_ARTIST_USER_FAILURE,payload:error})
        console.log("error ",error)
    }
}

export const addToFavourite=(id,artworkId)=>async(dispatch)=>{
    dispatch({type:ADD_TO_FAVORITE_REQUEST})
    try{
        const id = localStorage.getItem("id");
        const{data} = await api.put(`/api/v1/collector/${artworkId}/add_favourites`,{},{
           Headers:{
            id: `${id}`
           } 
        })
        dispatch({type:ADD_TO_FAVORITE_SUCCESS})
        console.log("Added to favorite", data)
    }catch(error){
        dispatch({type:ADD_TO_FAVORITE_FAILURE,payload:error})
        console.log("error",error)
    }

}


export const logout=()=>async(dispatch)=>{
    dispatch({type:LOGOUT_REQUEST})
    try{
        localStorage.clear();
        dispatch({type:LOGOUT})
        console.log("logout success")
    }catch(error){
        console.log("error", error)
    }
}

