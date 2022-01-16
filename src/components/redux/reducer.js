import { GET_DATA_SUCCESS, GET_DATA_FAILED, GET_DATA_REQUEST } from "./actiontype";

const state = {
    data:[],
    error:'',
}

const cryptoData = (state,action) =>{
    switch (action.type) {
        case GET_DATA_SUCCESS:
            return {...state, data:action.payload};
        case GET_DATA_FAILED:
            return { ...state, error:action.payload};
        default:
            return{...state};
    }
}

export default cryptoData;