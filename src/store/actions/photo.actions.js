export const actionTypes = {
	GET_PHOTOS: 'GET_PHOTOS',
    SET_PHOTOS: 'SET_PHOTOS'
}

export const getPhotos = (filters, limit) => ({
    type: actionTypes.GET_PHOTOS,
    payload: {filters, limit}
});

export const setPhotos= (photos) => ({
    type: actionTypes.SET_PHOTOS,
    payload: photos
});