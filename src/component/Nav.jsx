import React from 'react';
import '../componentCSS/Nav.css';
import {Link} from 'react-router-dom';

const Nav=(props)=>{
  
// const handleLinkClick = (event) => {
//     event.preventDefault(); // Prevent the default action of the link
//     console.log(`${event.target.textContent} link clicked`); // Optional: Log the link clicked
//     // You can also add any navigation logic you want here
// };

const handleDropdown=(event)=>{
    event.preventDefault();
    console.log("Prevented")
};

// const darkObjectMode={
//   backgroundColor:'black',
//   color:'white'
// };

// const lightObjectMode={
//   backgroundColor:'#778899',
//   color:'black'
// };
return(
<>
<div className={`navbar ${props.mode}`}>
    <Link to="/">{props.home}</Link>
    <Link to="/about">{props.about}</Link>
    <div className="dropdown">
      <a href="/" onClick={handleDropdown} className="dropbtn">{props.cont}</a>
      <div className="dropdown-content">
        <a href="/">{props.email}</a>
        <a href="/">{props.no}</a>
        <a href="/">{props.address}</a>
      </div>
    </div>
    <button onClick={props.toogleMode} className={props.mode==='light'?'light':'dark'}>{props.mode==='light'?'Dark Mode':'Light Mode'}</button>
</div>
</>
);
};

Nav.defaultProps={
  mode:'light'
};

export default Nav;