import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { actionTypes, setPhotos } from '../actions/photo.actions';
import { $http } from "../http/http";

const getPhotosService = async (filters) => {
    const api_resource = (process.env.NODE_ENV === 'production') 
    ? '/prod/externalapi/photos' 
    : '/dev/externalapi/photos';
    const result = await $http.get(`${api_resource}${filters}`);
    return result;
}

function* getPhotos({payload}) {
    try {
        const result = yield call(getPhotosService, payload);
        if(result.status === 200){
            yield put(setPhotos(result.data))
        }
    } catch (error) {
        console.log('error');
        console.log(error.request);      
    }
}

export function* watchGetPhotos() {
    yield takeEvery( actionTypes.GET_PHOTOS, getPhotos );
} 

export default function* rootSaga() {
    yield all([
        fork(watchGetPhotos),
    ]);
}
