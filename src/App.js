import './App.css';
import React, { useState } from 'react'
import { Movie } from './Component/Movie';
import { NavBar } from './Component/NavBar';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { MovieDetail } from './Component/MovieDetail';
function App() {
  const [search, setsearch] = useState('')
  const category = [
    {
      title:"Popular",
      path:"/",
      cname:"/popular",
      query:'',
      surl:""
    },
    {
      title:"Top Rated",
      path:"/toprated",
      cname:"/top_rated",
      query:'',
      surl:""
    },
    {
      title:"Upcoming ",
      path:"/upcoming",
      cname:"/upcoming",
      query:'',
      surl:""
    },
    {
      title:"Searched ",
      path:"/search",
      cname:"",
      query:search,
      surl:"/search"
    },
    
  ]
 
  return (

    <>
      <BrowserRouter>
        <NavBar setsearch={setsearch}/>
        <Routes>
          {category.map((item,index)=>(
            <Route key={index} path={item.path} element={<Movie  key={index} title={item.title} query={item.query} surl={item.surl} cname={item.cname} />} />
            
            ))}
            {/* <Route path="/search" element={<Movie  title={"Searched "} cname={''} query={search} />} /> */}
          <Route path="/singlemovie/:id" element={<MovieDetail />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
