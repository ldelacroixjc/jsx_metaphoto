export const actionTypes = {
	GET_PHOTOS: 'GET_PHOTOS',
    SET_PHOTOS: 'SET_PHOTOS'
}

export const getPhotos = (filters) => ({
    type: actionTypes.GET_PHOTOS,
    payload: filters
});

export const setPhotos= (photos) => ({
    type: actionTypes.SET_PHOTOS,
    payload: photos
});