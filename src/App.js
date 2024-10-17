import React,{useState} from 'react';
import Nav from './component/Nav';
import ImageDisplayer from './component/ImageDisplayer';
import './App.css';
// import ImageMore from './component/ImageMore';

const App = ()=>{
  let [mode,setMode]=useState('light');
  const body=document.body;

  const toogleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      body.style.backgroundColor=dark.backgroundColor;
    }
    else{
      setMode('light');
      body.style.backgroundColor=light.backgroundColor;
    }

  };

  const dark ={
    backgroundColor:'#121212'
  };

  const light={
    backgroundColor:'white'
  };

  return(
    <>
      <Nav home='Home' about='About' cont='Contacts' email='E-Mail' no='Phone' address='Address' mode={mode} toogleMode={toogleMode} />
      <ImageDisplayer mode={mode}/>
      {/* <ImageMore url1="https://cdna.artstation.com/p/assets/images/images/080/865/376/large/lokesh-rawat-r4-min.jpg?1728734269"
        url2="https://cdna.artstation.com/p/assets/images/images/080/865/380/large/lokesh-rawat-r6-min.jpg?1728734279"
        url3="https://cdna.artstation.com/p/assets/images/images/080/865/378/large/lokesh-rawat-r5-min.jpg?1728734274"  
      /> */}

      
      
    </>
  );
}

export default App;