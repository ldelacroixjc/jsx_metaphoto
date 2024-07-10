import {
	combineReducers
} from 'redux';
import photos from './photo.reducers';

const reducers = () => combineReducers({
	photos,
});

export default reducers;
