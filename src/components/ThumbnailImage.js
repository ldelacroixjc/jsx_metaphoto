import React from "react";
import classnames from 'classnames'

const  ThumbnailImage = props => {

    return (
        <img 
            alt={props.alt} 
            src={props.src} 
            className={`${props.className} img-thumbnail align-self-center   
                ${classnames({"rounded-circle": props.rounded, "small": props.small})}`
            }
        />

    );

}

export default ThumbnailImage;