import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Accordion from './Components/Accordion';
import "./App.css";
const App = () => {
  const [data, setData] = useState([]);
  // const fetchs = async () => {
  //   const response = await fetch("https://fakestoreapi.com/products");
  //   const result = await response.json();
  //   console.log(result)
  // }
   const getAxios=async()=>{
    try{
      const res = await axios.get("https://fakestoreapi.com/products");
      setData(res.data)
    }catch(error){
      console.log(error)
    }
   }
  useEffect(() => {
    // fetchs();
    //axios.get("https://fakestoreapi.com/products").then((res)=>console.log(res));;
    getAxios();
  }
    , [])
  return (
    <div className="container">
    {
      data && data.slice(1,15).map((item,index)=>{
        return <Accordion title={item.title} {...item} key={index}/>
      })
    }
    </div>
  )
}

export default App