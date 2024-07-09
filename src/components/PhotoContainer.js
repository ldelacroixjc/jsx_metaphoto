import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { getPhotos } from '../store/actions/photo.actions';

const PhotoContainer = props => {

    const dispatch = useDispatch();
   
    useEffect(() => {
        dispatch(getPhotos());
	}, []);

    return (
        <div>
            <p>This is some text in a paragraph.</p>
        </div>
    );
}

export default PhotoContainer;