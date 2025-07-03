import React from "react";
import '../index.css';
import T from './T';
import poster from '../assets/poster.jpg';


function Home(){
    return(
        <>
        <div className="home" style={{ backgroundImage: `url(${poster})` }}>
        <div className="home-overlay">
          <T/>
        </div>
        </div>
        
        </>
        
    )
}
export default Home;