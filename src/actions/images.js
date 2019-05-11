import {ADD_OR_EDIT_IMAGE, FETCH_IMAGES} from './actionTypes'
import axios from 'axios'
import BACKEND_API from '../config/apis'


const submissionConfig = {
	headers: {
		'content-type': 'multipart/form-data',
	},
}

export const fetchImages = () => (dispatch) => (
	axios.get(BACKEND_API.image).then(({data}) => (dispatch({
		type: FETCH_IMAGES,
		images: data
	})))
)

export const addOrEditImage = (form) => (dispatch) => (
	axios.post(BACKEND_API.image, form, submissionConfig).then(({data}) => (dispatch({
		type: ADD_OR_EDIT_IMAGE,
		image: data
	})))
)