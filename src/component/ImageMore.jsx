import React from 'react';
import '../componentCSS/ImageMore.css';
import { useLocation } from 'react-router-dom';

const ImageMore = (props) =>{
    const location=useLocation();
    const {url1,url2,url3}=location.state || {};
    // const url1="https://cdnb.artstation.com/p/assets/images/images/061/349/469/large/lokeshrawat-rawat-untitled3.jpg?1725527943";
    // const url2="https://cdna.artstation.com/p/assets/images/images/061/349/466/large/lokeshrawat-rawat-untitled7.jpg?1680592244";
    // const url3="https://cdnb.artstation.com/p/assets/images/images/061/349/473/large/lokeshrawat-rawat-untitled2.jpg?1680592253";
    return(
        <>
            <div className={`container ${props.mode}`}>
               <div className='desc'>
                <center><h2>Description</h2></center>
                <p>This is a random item created by lokesh asdasdasdasdas asdas dasda sdasd asdasdasdasdas dadadadasda dad asd ad asda sd a da d ad asd as das d ad asd as da da sd ad asd </p>
               </div>
               {/* <video className='video' controls>
                    <source src="" type='video/mp4'/>
                    Not Supported
               </video> */}
               <div className='images'>
                {url1 && <img src={url1} alt="sda"/>}
                {url2 && <img src={url2} alt="sda"/>}
                {url3 && <img src={url3} alt="sda"/>}
               </div> 
            </div>
        </>
    );
}

export default ImageMore;