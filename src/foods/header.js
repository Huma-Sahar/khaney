import React from 'react';
import img1 from './images/food-1.jpg' 



function Header(){
 return(
     <>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand logo" href="Navbar">Khaney</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="Home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="About">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="Contact">Contact</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

<div className ="imgs">
<img src={img1} className="img-fluid banner" alt="Responsive  " width="100%"  ></img>                            


</div>

     </>
 )


}

export default Header;