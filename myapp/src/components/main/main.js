import React from 'react';
import {Link} from 'react-router-dom'
import four from '../../images/4.jpg' 
import five from '../../images/5.jpg'
import six from '../../images/1.jpg'
const main = () => {
    return (
        <div className="container">
         
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
  
        <div className="item active">
          <img src={four} alt="virasat"/>
          <div className="carousel-caption">
          </div>
        </div>
  
        <div className="item">
          <img src={five} alt="virasat"/>
          <div className="carousel-caption">
          </div>
        </div>
      
        <div className="item">
          <img src={six} alt="virasat"/>
          <div className="carousel-caption">
          </div>
        </div>
    
      </div>
  
      <a className="left carousel-control" href="#myCarousel" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control" href="#myCarousel" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right"></span>
        <span className="sr-only">Next</span>
      </a>
    
  </div>
        
        
          <div className="row" id="about">
           
           <div className="col-lg-12 col-sm-12 col-md-12 description" >
               
           <h1>ABOUT CHESS</h1>
               <div className="circle">

               </div>
               <p>SPIC MACAY (Society for the Promotion of Indian Classical Music And Culture Amongst Youth) is a non-political, nationwide, voluntary movement founded in 1977 
                   by Dr Kiran Seth, Professor-Emeritus at IIT-Delhi who was awarded the ‘Padma Shri’ for his contribution to the arts in 2009.
                  SPICMACAY’s intention is to enrich the quality of formal education by increasing awareness about different aspects of Indian heritage 
                  and inspiring the young mind to imbibe the values embedded in it. It seeks to inspire youth through experiencing the mysticism embodied
                  in the rich and heterogeneous cultural tapestry of Indian and World Heritage, with a hope that the beauty, grace, values and wisdom 
                  embodied in these arts will influence their way of life and thinking and inspire one to become a better human being.
                  For this, the most accomplished artistes of the country render programmes of Indian classical music and dance, folk, poetry, 
                  theatre, traditional paintings, crafts & yog primarily in schools and colleges.
                  In 2011, SPIC MACAY was awarded the Rajiv Gandhi Sadbhavana award in recognition of its contribution to youth development.</p>
           
           
           </div>
           </div>
        </div>
           
    );
};

export default main;