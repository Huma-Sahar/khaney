import React from 'react';
import img2 from './images/food-2.jpg' 
import img3 from './images/food-3.jpg' 
import img4 from './images/food-4.jpg' 





function About() {
    return(
    
        <>
             <h1 className="display-1 ">About Us</h1>


        <div className="card-group">
  <div className="card">
    <img src={img4} class="card-img-top top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Lorem ipsum dolor sit amet. Est cupiditate beatae in sequi nostrum
       nam culpa beatae eos suscipit culpa ut natus consequatur ut labore dicta est amet eaque. Et quia
       iusto qui explicabo tenetur ea possimus nostrum distinctio corporis in voluptas vitae?</p>
    </div>
    
  </div>
  <div className="card">
    <img src={img2} class="card-img-top top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Lorem ipsum dolor sit amet. Est cupiditate beatae in sequi nostrum 
      nam culpa beatae eos suscipit culpa ut natus consequatur ut labore dicta est amet eaque.
       Et quia iusto qui explicabo tenetur ea possimus nostrum distinctio corporis in voluptas vitae?</p>
    </div>
    
  </div>
  <div className="card">
    <img src={img3} className="card-img-top top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Lorem ipsum dolor sit amet. Est cupiditate beatae in sequi nostrum
       nam culpa beatae eos suscipit culpa ut natus consequatur ut labore dicta est amet eaque.
       Et quia iusto qui explicabo tenetur ea possimus nostrum distinctio corporis in voluptas vitae?</p>
    </div>
    
  </div>
</div>


        </>


    )
}


export default About