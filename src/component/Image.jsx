import React from "react";
import '../componentCSS/Image.css';
import ImageItems from "./ImageItems";
import {Link} from 'react-router-dom';

const Image = (props)=>{

    const item1={
        url:"https://cdnb.artstation.com/p/assets/images/images/061/349/469/large/lokeshrawat-rawat-untitled3.jpg?1725527943",
        url1:"https://cdna.artstation.com/p/assets/images/images/080/865/376/large/lokesh-rawat-r4-min.jpg?1728734269",
        url2:"https://cdna.artstation.com/p/assets/images/images/080/865/380/large/lokesh-rawat-r6-min.jpg?1728734279",
        url3:"https://cdna.artstation.com/p/assets/images/images/080/865/378/large/lokesh-rawat-r5-min.jpg?1728734274"
    };

    const item2={
        url:"https://cdna.artstation.com/p/assets/images/images/080/315/922/20240925044600/smaller_square/lokesh-rawat-p17png.jpg?1727257560",
        url1:"https://cdna.artstation.com/p/assets/images/images/080/315/922/large/lokesh-rawat-p17png.jpg?1727257560",
        url2:"https://cdna.artstation.com/p/assets/images/images/080/315/924/large/lokesh-rawat-p16png.jpg?1727257517",
        url3:"https://cdna.artstation.com/p/assets/images/images/080/315/928/large/lokesh-rawat-p15png.jpg?1727257527"
    };

    const item3={
        url:"https://cdnb.artstation.com/p/assets/images/images/079/677/567/smaller_square/lokesh-rawat-minimil16.jpg?1725528470",
        url1:"https://cdnb.artstation.com/p/assets/images/images/079/677/567/large/lokesh-rawat-minimil16.jpg?1725528470",
        url2:"https://cdna.artstation.com/p/assets/images/images/079/677/592/large/lokesh-rawat-minimil6.jpg?1725528512",
        url3:"https://cdna.artstation.com/p/assets/images/images/079/677/586/large/lokesh-rawat-minimil10.jpg?1725528502"
    };

    const item4={
        url:"https://cdnb.artstation.com/p/assets/images/images/061/349/469/20240905041902/smaller_square/lokeshrawat-rawat-untitled3.jpg?1725527943",
        url1:"https://cdnb.artstation.com/p/assets/images/images/061/349/469/large/lokeshrawat-rawat-untitled3.jpg?1725527943",
        url2:"https://cdna.artstation.com/p/assets/images/images/061/349/466/large/lokeshrawat-rawat-untitled7.jpg?1680592244",
        url3:"https://cdnb.artstation.com/p/assets/images/images/061/349/473/large/lokeshrawat-rawat-untitled2.jpg?1680592253"
    };

    const item5={
        url:"https://cdnb.artstation.com/p/assets/images/images/061/329/847/smaller_square/lokeshrawat-rawat-307339353-189598260141410-5414505699772491324-n.jpg?1680542904",
        url1:"https://cdnb.artstation.com/p/assets/images/images/061/329/847/large/lokeshrawat-rawat-307339353-189598260141410-5414505699772491324-n.jpg?1680542904",
        url2:"https://cdnb.artstation.com/p/assets/images/images/061/329/847/large/lokeshrawat-rawat-307339353-189598260141410-5414505699772491324-n.jpg?1680542904",
        url3:"https://cdna.artstation.com/p/assets/images/images/061/329/854/large/lokeshrawat-rawat-307817835-566930485211249-3819457597575642188-n.jpg?1680542916"
    };

    const item6={
        url:"https://cdnb.artstation.com/p/assets/images/images/061/349/469/20240905041902/smaller_square/lokeshrawat-rawat-untitled3.jpg?1725527943",
        url1:"https://cdnb.artstation.com/p/assets/images/images/061/349/469/large/lokeshrawat-rawat-untitled3.jpg?1725527943",
        url2:"https://cdna.artstation.com/p/assets/images/images/061/349/466/large/lokeshrawat-rawat-untitled7.jpg?1680592244",
        url3:"https://cdnb.artstation.com/p/assets/images/images/061/349/473/large/lokeshrawat-rawat-untitled2.jpg?1680592253"
    };

    const item7={
        url:"https://cdnb.artstation.com/p/assets/images/images/061/349/469/large/lokeshrawat-rawat-untitled3.jpg?1725527943",
        url1:"https://cdna.artstation.com/p/assets/images/images/080/865/376/large/lokesh-rawat-r4-min.jpg?1728734269",
        url2:"https://cdna.artstation.com/p/assets/images/images/080/865/380/large/lokesh-rawat-r6-min.jpg?1728734279",
        url3:"https://cdna.artstation.com/p/assets/images/images/080/865/378/large/lokesh-rawat-r5-min.jpg?1728734274"
    };

    const item8={
        url:"https://cdnb.artstation.com/p/assets/images/images/061/349/469/20240905041902/smaller_square/lokeshrawat-rawat-untitled3.jpg?1725527943",
        url1:"https://cdnb.artstation.com/p/assets/images/images/061/349/469/large/lokeshrawat-rawat-untitled3.jpg?1725527943",
        url2:"https://cdna.artstation.com/p/assets/images/images/061/349/466/large/lokeshrawat-rawat-untitled7.jpg?1680592244",
        url3:"https://cdnb.artstation.com/p/assets/images/images/061/349/473/large/lokeshrawat-rawat-untitled2.jpg?1680592253"
    };

    const item9={
        url:"https://cdnb.artstation.com/p/assets/images/images/079/677/567/smaller_square/lokesh-rawat-minimil16.jpg?1725528470",
        url1:"https://cdnb.artstation.com/p/assets/images/images/079/677/567/large/lokesh-rawat-minimil16.jpg?1725528470",
        url2:"https://cdna.artstation.com/p/assets/images/images/079/677/592/large/lokesh-rawat-minimil6.jpg?1725528512",
        url3:"https://cdna.artstation.com/p/assets/images/images/079/677/586/large/lokesh-rawat-minimil10.jpg?1725528502"
    };

    return(
        
        <div className={`galary ${props.mode}`}>

            <Link to="/imageMore" state={item1}>
            <ImageItems name="Lokesh's House" 
            url={item1.url}/>
            </Link>



            <Link to="/imageMore" state={item2}>
            <ImageItems name="Lokesh's Facewash" 
            url={item2.url}/>
            </Link>


            <Link to='/imageMore' state={item3}>
            <ImageItems name="Lokesh's House" 
            url={item3.url}/>
            </Link>


            <Link to='/imageMore' state={item4}>
            <ImageItems name="Lokesh's Headphone" 
            url={item4.url}/>
            </Link>


            <Link to='/imageMore' state={item5}>
            <ImageItems name="Lokesh's Japani tel" 
            url={item5.url}/>
            </Link>
           
            <Link to='/imageMore' state={item6}>
            <ImageItems name="Lokesh's Japani tel" 
            url={item6.url}/>
            </Link>
            
            <Link to='/imageMore' state={item7}>
            <ImageItems name="Lokesh's Japani tel" 
            url={item7.url}/>
            </Link>
            
            <Link to='/imageMore' state={item8}>
            <ImageItems name="Lokesh's Japani tel" 
            url={item8.url}/>
            </Link>
            
            <Link to='/imageMore' state={item9}>
            <ImageItems name="Lokesh's Japani tel" 
            url={item9.url}/>
            </Link>
        </div>
    );
}

export default Image;