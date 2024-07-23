import { isPresentInFavorites } from "../../Config/logic"
import { ADD_TO_FAVORITE_FAILURE, ADD_TO_FAVORITE_REQUEST, ADD_TO_FAVORITE_SUCCESS, GET_ARTIST_USER_FAILURE, GET_ARTIST_USER_REQUEST, GET_COLLECTOR_USER_FAILURE, GET_COLLECTOR_USER_REQUEST, REGISTER_ARTIST_FAILURE, REGISTER_ARTIST_REQUEST, REGISTER_ARTIST_SUCCESS, REGISTER_COLLECTOR_FAILURE, REGISTER_COLLECTOR_REQUEST, REGISTER_COLLECTOR_SUCCESS } from "./ActionTypes"

const initialState={
    user:null,
    isLoading:null,
    error:null,
    favorites:[],
    success:null

}

export const authReducer = (state=initialState,action)=>{
    switch(action.type){
        case REGISTER_ARTIST_REQUEST:
        case REGISTER_COLLECTOR_REQUEST:
        case GET_COLLECTOR_USER_REQUEST:
        case GET_ARTIST_USER_REQUEST:
        case ADD_TO_FAVORITE_REQUEST:
            return {...state, isLoading:true,error:null,success:null}
        case REGISTER_ARTIST_SUCCESS:
        case REGISTER_COLLECTOR_SUCCESS:
            return {...state, isLoading:false,id:action.payload,success:"Register Success"} 

        case ADD_TO_FAVORITE_SUCCESS:
            return{
                ...state,
                isLoading:false,
                error:null,
                favorites:isPresentInFavorites(state.favorites,action.payload)
                ? state.favorites.filter((item)=> item.id !== action.payload)
                :[action.payload,...state.favorites]
            }  

            case REGISTER_ARTIST_FAILURE:
            case REGISTER_COLLECTOR_FAILURE:
            case GET_COLLECTOR_USER_FAILURE:
            case GET_ARTIST_USER_FAILURE:
            case ADD_TO_FAVORITE_FAILURE:
                return {...state,isLoading:false,error:action.payload,success:null}

            default:
                return state;



    }
}