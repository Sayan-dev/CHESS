import React from 'react';
import {Link} from 'react-router-dom'
import four from '../../images/4.png' 
import five from '../../images/3.jpg'
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
          <img src={four} alt="chess"/>
          <div className="carousel-caption">
          </div>
        </div>
  
        <div className="item">
          <img src={five} alt="chess"/>
          <div className="carousel-caption">
          </div>
        </div>
      
        <div className="item">
          <img src={six} alt="chess"/>
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
               <p>The Chemical Engineering Student's Society (CHESS) is an independent student run society of Chemical Engineering Department of NIT Durgapur.It is solely dedicated to form a network
                 among all the students,faculty members and alumni of the department. It promotes interaction  within the department and implements acadmeic, social and other programs of interest to its members.
               </p>
           
           
           </div>
           </div>

           <div id="box">
            <div id="smallbox">
                <i className="fas fa-user-graduate" id="cap1" style={{fontSize:"40px",color:"#E39821"}}>
                    <h3 id="faculty"><Link to="/facad">FACULTY</Link></h3></i>
            </div>
            <div id="smallbox">
                <i className="fas fa-graduation-cap" id="cap1" style={{fontSize:"40px",color:"#E39821"}}>
                    <h3 id="faculty"><Link to="/subject">SYLLABUS</Link></h3></i>
           </div>
           
           <div id="smallbox">
            <i className="fa fa-book" id="cap1"style={{fontSize:"40px",color:"#E39821"}}>
            <h3 id="faculty"><Link to="/register">REGISTER</Link></h3></i>
           </div>
           <div id="smallbox">
            <i className="fa fa-lock" id="cap1" style={{fontSize:"40px",color:"#E39821"}}>
            <h3 id="faculty"><Link to="/login">LOGIN</Link></h3></i>
           </div>
             
        </div>

        </div>
           
    );
};

export default main;