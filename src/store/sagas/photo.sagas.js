import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { actionTypes, setPhotos } from '../actions/photo.actions';
import { $http } from "../http/http";

const getCallsAsync = async () => {
    const result = await $http.get(`/dev/externalapi/photos?`);
    console.log('-----calls-------');
    console.log(result);
    return result;
}

function* getPhotos() {
    try {
        console.log("si esta ejecutando getPhotos desde saga")
        const result = yield call(getCallsAsync);
        if(result.data){
            yield put(setPhotos(result.data))
        }
    } catch (error) {
        console.log('error');
        console.log(error.request);      
    }
}

export function* watchGetPhotos() {
    console.log('llega a watchGetPhotos----------------')
    yield takeEvery( actionTypes.GET_PHOTOS, getPhotos );
} 

export default function* rootSaga() {
    yield all([
        fork(watchGetPhotos),
    ]);
}
