import { all } from 'redux-saga/effects';
import photoSagas from './photo.sagas';

export default function* rootSaga(getState) {
	yield all([
		photoSagas()
	]);
}