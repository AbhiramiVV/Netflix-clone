
import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import { action,originals,Comedy,Horror,Romance,trending } from "./urls";
import './App.css';
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
    <div>
        <NavBar/>
        <Banner/>
        <RowPost url={originals} title='Netflix Orginals'/>
        <RowPost url={trending} title='Trending Movies' isSmall/>
        <RowPost url={action} title='Action Movies' isSmall/>
        <RowPost url={Comedy} title='Comedy Movies' isSmall/>
        <RowPost url={Horror} title='Horror Movies' isSmall/>
        <RowPost url={Romance} title='Romance Movies' isSmall/>
       
    </div>
  );
}

export default App;
