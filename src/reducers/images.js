import {ADD_OR_EDIT_IMAGE, FETCH_IMAGES} from '../actions/actionTypes'

const initialState = {}

const imagesReducer = (images = initialState, action) => {
	switch (action.type) {
		case ADD_OR_EDIT_IMAGE:
			return {
				...images,
				[action.image._id]: action.image,
			}
		case FETCH_IMAGES:
			return {
				...action.images,
			}
		default:
			return images
	}
}

export default imagesReducer
