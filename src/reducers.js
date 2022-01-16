import { combineReducers } from "redux";
import cryptoData from "./components/redux/reducer";


const rootReducer = combineReducers({
    crypto:cryptoData,
})

export default rootReducer;