import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react';
import Home from './components/Home';

function App() {
  const [data,setData] =useState([])
  useEffect(() => {
     axios.get("http://127.0.0.1:8000/restos").then((apidata)=>{
    console.log(apidata)
    console.log("first");
     setData(apidata)
    }).catch((err)=>{
      console.log(">>>>>",err)
    })
  }, []);
  
  return (
    <>
      <Home data={data}/>

    </>
  );
}

export default App;
