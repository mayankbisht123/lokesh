import React from 'react';
import '../componentCSS/ImageMore.css';

const ImageMore = (props) =>{
    return(
        <>
            <div className='container'>
               <div className='desc'>
                <center><h2>Description</h2></center>
                <p>This is a random item created by lokesh asdasdasdasdas asdas dasda sdasd asdasdasdasdas dadadadasda dad asd ad asda sd a da d ad asd as das d ad asd as da da sd ad asd </p>
               </div>
               {/* <video className='video' controls>
                    <source src="" type='video/mp4'/>
                    Not Supported
               </video> */}
               <div className='images'>
                <img src={props.url1} alt="sda"/>
                <img src={props.url2} alt="sda"/>
                <img src={props.url3} alt="sda"/>
               </div> 
            </div>
        </>
    );
}

export default ImageMore;