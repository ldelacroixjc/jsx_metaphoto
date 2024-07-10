import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Card, CardBody } from 'reactstrap';
import ThumbnailImage from './ThumbnailImage';
import { getPhotos } from '../store/actions/photo.actions';

const PhotoContainer = props => {

    const [ photos, setPhotos] = useState([]);
    const dispatch = useDispatch();
    const { list } = useSelector( (store) => store.photos );
   
    useEffect(() => {
        console.log(props.filters);
        dispatch(getPhotos(props.filters));
	}, []);

    useEffect(() => {
        dispatch(getPhotos(props.filters));
	}, [props.filters]);

    useEffect(() => {
        if(list.length > 0){
            setPhotos(list);
        }
	}, [list]);

    const photoList = (
        photos.map( (photo, index) => 
            <Col md="4" sm="4" lg="3" xxs="12" key={index}>
                <Card className="mb-4">
                    <Row>
                        <Col xs="12" className="resume-card-picture">
                            <ThumbnailImage rounded src={photo.thumbnailUrl} alt="Card image" className="resume-card-image m-3 mt-4" />
                        </Col>
                    </Row>
                    <CardBody className="resume-card-body">
                        <Row>
                            <Col xs={12} className="resume-card-title">
                                {photo.title}
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} className="resume-card-subtitle">
                                {photo.album.title}
                            </Col>
                        </Row>
                        <Row>
                            <Col x2={12}>
                                {props.children}
                            </Col>
                        </Row>
                        <Row>
                            
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        )           
    );

    return (
        <Row>
            <Col xs={12}>
                <Row>
                    {photoList}
                </Row>
            </Col>
        </Row>
    );
}

export default PhotoContainer;