import axios from 'axios'
import { useParams } from 'react-router-dom'
import {
    ITEM_LIST_REQUEST,
    ITEM_LIST_SUCCESS,
    ITEM_LIST_FAIL,

    ITEM_DETAILS_REQUEST,
    ITEM_DETAILS_SUCCESS,
    ITEM_DETAILS_FAIL,

    CATEGORY_LIST_REQUEST,
    CATEGORY_LIST_SUCCESS,
    CATEGORY_LIST_FAIL,

    CONFIG_LIST_REQUEST,
    CONFIG_LIST_SUCCESS,
    CONFIG_LIST_FAIL,

    CONFIG_UPDATE_REQUEST,
    CONFIG_UPDATE_SUCCESS,
    CONFIG_UPDATE_FAIL
} from '../constants/itemConstants'


//ITEM
//getItemsByFilters
export const getItemsByCategory = (idCategory) => async (dispatch) => {
    try {
        dispatch({ type: ITEM_LIST_REQUEST })
        const { data } = await axios.get(`http://3.72.53.53:8000/api/item/?idCategory=${idCategory}`)

        dispatch({
            type: ITEM_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ITEM_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

//getItemsByFilters
export const getItemById = (id) => async (dispatch) => {
    try {
        dispatch({ type: ITEM_LIST_REQUEST })
        const params = { id: id }
        const { data } = await axios.get(
            `http://3.72.53.53:8000/api/item/`,
            { params: params}
        )
      

        dispatch({
            type: ITEM_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ITEM_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

//getItemsByQuery
export const getItemsBySearch = (params) => async (dispatch) => {
    try {
        dispatch({ type: ITEM_LIST_REQUEST })
        const { data } = await axios.get(
            `http://3.72.53.53:8000/api/query/`,
            { params: params }
        )        

        dispatch({
            type: ITEM_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ITEM_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

//getCategoryByFilters
export const getCategory = () => async (dispatch) => {
    try {
        dispatch({ type: CATEGORY_LIST_REQUEST })
        const { data } = await axios.get(`http://3.72.53.53:8000/api/category/`)
      
        dispatch({
            type: CATEGORY_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CATEGORY_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

//getCategoryByFilters
export const getConfiguration = () => async (dispatch) => {
    try {
        dispatch({ type: CONFIG_LIST_REQUEST })
        const { data } = await axios.get(`http://3.72.53.53:8000/api/config/`)

      
        dispatch({
            type: CONFIG_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CONFIG_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

//getCategoryByFilters
export const setConfiguration = (params) => async (dispatch) => {
    try {
        dispatch({ type: CONFIG_UPDATE_REQUEST })
        const { data } = await axios.post(
            `http://3.72.53.53:8000/api/setConfig/`,
            params 
        )

        dispatch({
            type: CONFIG_UPDATE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CONFIG_UPDATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
