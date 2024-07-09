import { actionTypes } from "../actions/photo.actions";

const INIT_STATE = {
	photos: []
};

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		case actionTypes.SET_PHOTOS:
			const photos = action.payload;
			return { ...state, photos: photos };

		default:
			return state || INIT_STATE		
	}
};
