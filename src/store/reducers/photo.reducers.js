import { actionTypes } from "../actions/photo.actions";

const INIT_STATE = {
	list: []
};

const photoReducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		case actionTypes.SET_PHOTOS:
			const list = action.payload;
			return { ...state, list: list };
		default:
			return state || INIT_STATE		
	}
};

export default photoReducer;