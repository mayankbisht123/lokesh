import React,{useState} from 'react';
import Nav from './component/Nav';
import Image from './component/Image';
import ImageMore from './component/ImageMore';
import './App.css';
import{
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

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
    <Router>
      <Nav home='Home' about='About' cont='Contacts' email='E-Mail' no='Phone' address='Address' mode={mode} toogleMode={toogleMode} />
      <Routes>
        <Route exact path='/' element={<Image mode={mode}/>}/>
        <Route exact path="/imageMore" element={<ImageMore/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;