import React from 'react';
import '../componentCSS/About.css';

const About=(props)=>{
return(
    <>
    <div className={`container-about ${props.mode}`}>
        <h1>This is about the galary of lokesh</h1>
    </div>
    </>
);
};

export default About;