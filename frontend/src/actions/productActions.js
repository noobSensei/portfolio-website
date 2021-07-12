import axios from 'axios'
import * as actions from '../constants/productConstants'

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: actions.PRODUCT_LIST_REQUEST })

    const { data } = await axios.get('http://localhost:5000/api/products')
    dispatch({
      type: actions.PRODUCT_LIST_SUCCESS,
      payload: data,
    })
  } catch (err) {
    dispatch({
      type: actions.PRODUCT_LIST_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    })
  }
}

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actions.PRODUCT_DETAILS_REQUEST })
    const { data } = await axios.get(`http://localhost:5000/api/products/${id}`)
    dispatch({
      type: actions.PRODUCT_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (err) {
    dispatch({
      type: actions.PRODUCT_DETAILS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    })
  }
}