import React from 'react';
import '../componentCSS/ImageItems.css';

const ImageItems = (props) =>{
    
    return(
        <>
            <div className='container'>
                <img src={props.url} alt='news'/>
                <div className='product'>
                    <h4>{props.name}</h4>
                </div>
            </div>
        </>
    );
}

export default ImageItems;