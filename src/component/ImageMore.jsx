import React from 'react';
import '../componentCSS/ImageMore.css';
import { useLocation } from 'react-router-dom';

const ImageMore = () =>{
    const location=useLocation();
    const item=location.state || {};
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
                {item.url1 && <img src={item.url1} alt="sda"/>}
                {item.url2 && <img src={item.url2} alt="sda"/>}
                {item.url3 && <img src={item.url3} alt="sda"/>}
               </div> 
            </div>
        </>
    );
}

export default ImageMore;