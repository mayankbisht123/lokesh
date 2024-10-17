import React from "react";
import '../componentCSS/Image.css';
import ImageItems from "./ImageItems";

const Image = (props)=>{

    return(
        
        <div className={`galary ${props.mode}`}>
            <a href="/item1"><ImageItems name="Lokesh's House" url="https://cdnb.artstation.com/p/assets/images/images/061/349/469/large/lokeshrawat-rawat-untitled3.jpg?1725527943"/></a>
            <a href="/item1"><ImageItems name="Lokesh's Facewash" url="https://cdna.artstation.com/p/assets/images/images/061/329/570/large/lokeshrawat-rawat-314452169-206009471872364-3140517855420059795-n.jpg?1680542580"/></a>
            <a href='/item3'><ImageItems name="Lokesh's House" url="https://cdnb.artstation.com/p/assets/images/images/061/349/469/large/lokeshrawat-rawat-untitled3.jpg?1725527943"/></a>
            <a href='/item4'><ImageItems name="Lokesh's Headphone" url="https://cdnb.artstation.com/p/assets/images/images/061/329/767/large/lokeshrawat-rawat-307464416-796256041806102-2380195993507287381-n.jpg?1680542822"/></a>
            <a href='/item5'><ImageItems name="Lokesh's Japani tel" url="https://cdna.artstation.com/p/assets/images/images/080/865/380/large/lokesh-rawat-r6-min.jpg?1728734279"/></a>
            <a href='/item5'><ImageItems name="Lokesh's Japani tel" url="https://cdna.artstation.com/p/assets/images/images/080/865/380/large/lokesh-rawat-r6-min.jpg?1728734279"/></a>
            <a href='/item5'><ImageItems name="Lokesh's Japani tel" url="https://cdna.artstation.com/p/assets/images/images/080/865/380/large/lokesh-rawat-r6-min.jpg?1728734279"/></a>
            <a href='/item5'><ImageItems name="Lokesh's Japani tel" url="https://cdna.artstation.com/p/assets/images/images/080/865/380/large/lokesh-rawat-r6-min.jpg?1728734279"/></a>
            <a href='/item5'><ImageItems name="Lokesh's Japani tel" url="https://cdna.artstation.com/p/assets/images/images/080/865/380/large/lokesh-rawat-r6-min.jpg?1728734279"/></a>
        </div>
    );
}

export default Image;