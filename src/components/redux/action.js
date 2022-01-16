import {
  GET_DATA_SUCCESS,
  GET_DATA_FAILED,
  GET_DATA_REQUEST,
} from "./actiontype";
import { getCryptoData } from "./services";

function getAllData () {
  return (dispatch) => {
    dispatch(request());
    getCryptoData()
      .then((response) => {
        console.log("response", response);
        dispatch(success(response));
      })
      .catch((error) => {
        dispatch(failure(error));
      });
  };

  function request() {
    return {
      type: GET_DATA_REQUEST,
    };
  }
  function success(data) {
    return {
      type: GET_DATA_SUCCESS,
      payload:data,
    };
  }
  function failure(error) {
    return {
      type: GET_DATA_FAILED,
      payload: error,
    };
  }
};
export default getAllData;
