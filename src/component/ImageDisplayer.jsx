import React from 'react';
import Image from './Image';
import{
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';

const ImageDisplayer=(props)=>{
return(
    <>
        <Image mode={props.mode}/>
    </>
);
};

export default ImageDisplayer;