export const actionTypes = {
	GET_PHOTOS: 'GET_PHOTOS',
    SET_PHOTOS: 'SET_PHOTOS'
}

export const getPhotos = () => ({
    type: actionTypes.GET_PHOTOS
});

export const setPhotos= (photos) => ({
    type: actionTypes.SET_PHOTOS,
    payload: photos
});