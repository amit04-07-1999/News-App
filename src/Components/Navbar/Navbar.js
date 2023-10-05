import React, { useContext} from "react";
import "./Navbar.css";
import NewsProvider from "../../provider/NewsProvider";


const Navbar = () => {
  const { newsapi, fetchData } = useContext(NewsProvider);
  console.log("name", newsapi);

  return (
    <>
<div className="img-1">
  <img src="Images/logo.png" alt="" className="img-2"/>
</div>

{/* <div id="nav">
      <ul class="nav-menu clearfix unstyled">
      <li onClick={() => fetchData("live")}><a  class="three-d">
        LiveTV
          <span class="three-d-box"><span class="front">LiveTV</span><span class="back">LiveTV</span></span>
        </a></li> 

        <li onClick={() => fetchData("latest")}><a  class="three-d">
        Latest
          <span class="three-d-box"><span class="front">Latest</span><span class="back">Latest</span></span>
        </a></li>

        <li onClick={() => fetchData("india")}><a  class="three-d">
          India
          <span class="three-d-box"><span class="front">India</span><span class="back">India</span></span>
        </a></li>

        <li onClick={() => fetchData("education")}><a  class="three-d">
          Education
          <span class="three-d-box"><span class="front">Education</span><span class="back">Education</span></span>
        </a></li>

        <li onClick={() => fetchData("world")}><a class="three-d">
          World
          <span class="three-d-box"><span class="front">World</span><span class="back">World</span></span>
        </a></li>

        <li onClick={() => fetchData("cities")}><a class="three-d">
          Cities
          <span class="three-d-box"><span class="front">Cities</span><span class="back">Cities</span></span>
        </a></li>

        <li onClick={() => fetchData("trend")}><a class="three-d">
          Trend
          <span class="three-d-box"><span class="front">Trend</span><span class="back">Trend</span></span>
        </a></li>
       
        
        <li onClick={() => fetchData("sports")}><a  class="three-d">
          Sports
          <span class="three-d-box"><span class="front">Sports</span><span class="back">Sports</span></span>
        </a></li>

        <li onClick={() => fetchData("bitcoin")}><a  class="three-d">
        Bitcoin
          <span class="three-d-box"><span class="front">Bitcoin</span><span class="back">Bitcoin</span></span>
        </a></li>

        <li onClick={() => fetchData("automobiles")}><a  class="three-d">
        Automobiles
          <span class="three-d-box"><span class="front">Automobiles</span><span class="back">Automobiles</span></span>
        </a>
        </li>
        <li onClick={() => fetchData("technology")}><a  class="three-d">
        Technology
          <span class="three-d-box"><span class="front">Technology</span><span class="back">Technology</span></span>
        </a></li>
        
      </ul>
    </div> */}


<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid" >
    {/* <a class="navbar-brand" href="#"></a> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">

    <ul class="nav-menu clearfix unstyled navbar-nav">
      <li onClick={() => fetchData("live")} class="nav-item"><a class="three-d" aria-current="page" href="#">
        LiveTV
          <span class="three-d-box"><span class="front">LiveTV</span><span class="back">LiveTV</span></span>
        </a></li> 

        <li onClick={() => fetchData("latest")} class="nav-item"><a class="three-d" href="#">
        Latest
          <span class="three-d-box"><span class="front">Latest</span><span class="back">Latest</span></span>
        </a></li>

        <li onClick={() => fetchData("india")} class="nav-item"><a class="three-d" href="#">
          India
          <span class="three-d-box"><span class="front">India</span><span class="back">India</span></span>
        </a></li>

        <li onClick={() => fetchData("education")} class="nav-item"><a  class="three-d" href="#">
          Education
          <span class="three-d-box"><span class="front">Education</span><span class="back">Education</span></span>
        </a></li>

        <li onClick={() => fetchData("world")} class="nav-item"><a class="three-d" href="#"> 
          World
          <span class="three-d-box"><span class="front">World</span><span class="back">World</span></span>
        </a></li>

        <li onClick={() => fetchData("cities")} class="nav-item"><a class="three-d" href="#">
          Cities
          <span class="three-d-box"><span class="front">Cities</span><span class="back">Cities</span></span>
        </a></li>

        <li onClick={() => fetchData("trend")} class="nav-item"><a class="three-d" href="#">
          Trend
          <span class="three-d-box"><span class="front">Trend</span><span class="back">Trend</span></span>
        </a></li>
       
        
        <li onClick={() => fetchData("sports")} class="nav-item"><a  class="three-d" href="#">
          Sports
          <span class="three-d-box"><span class="front">Sports</span><span class="back">Sports</span></span>
        </a></li>

        <li onClick={() => fetchData("bitcoin")} class="nav-item"><a  class="three-d" href="#">
        Bitcoin
          <span class="three-d-box"><span class="front">Bitcoin</span><span class="back">Bitcoin</span></span>
        </a></li>

        <li onClick={() => fetchData("automobiles")} class="nav-item"><a  class="three-d" href="#">
        Automobiles
          <span class="three-d-box"><span class="front">Automobiles</span><span class="back">Automobiles</span></span>
        </a>
        </li>
        <li onClick={() => fetchData("technology")} class="nav-item"><a  class="three-d" href="#">
        Technology
          <span class="three-d-box"><span class="front">Technology</span><span class="back">Technology</span></span>
        </a></li>
        
      </ul>

      {/* <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul> */}
    </div>
  </div>
</nav>

    </>
  );
};

export default Navbar;
