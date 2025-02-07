import React from "react";
import Homepage from './homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const app=()=>{
  return(
    <Router>
    <Routes>
        <Route path="/" element={<Homepage />} />
    </Routes>
</Router>
  );
}

export default app
