import React from 'react'
import card from "../assets/credit.png"
import momo from "../assets/mtn.png"
import "../styles/payment.css"
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default function Payment() {

  return (
 <React.Fragment>
      <Sidebar />
      <div className="w-4/5">
        <Navbar />
    <div id='paymentPage'>
      <div id='paymentMethods'>
        <div id='card' onClick={function(){
            document.getElementById("credit").style.display="block";
            document.getElementById("mobileMoney").style.display="none";
            
          }}>
          <img src={card} />
        </div>
        <div id='momo' onClick={function(){
            document.getElementById("mobileMoney").style.display="block";
            document.getElementById("credit").style.display="none"
          }}>
          <img src={momo}/>
        </div>
      </div>
      <div id='credit'>
        <form>
        	<div className="input-group" id='user'>
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <span className="fa fa-user"></span>
                    </span>                    
                </div>
                <input type="text" className="form-control" placeholder="Username" required="required"/>
            </div>
         
        	<div className="input-group" id='account'>
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <span className="fa fa-credit-card"></span>
                    </span>                    
                </div>
                <input type="text" className="form-control" placeholder="card information" required="required"/>
        </div> 
        <div className="input-group" id='date'>
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <span className="fa fa-calendar"></span>
                    </span>                    
                </div>
                <input type="date" className="form-control" placeholder="date" required="required"/>
        </div> 
        
        <button className="btn btn-primary submitbtn" type="submit">Submit</button>
        
        </form>    
       </div>
       <div id='mobileMoney'>
    <form>
    <div className="input-group" id='account'>
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <span className="fa fa-user"></span>
                    </span>                    
                </div>
                <input type="text" className="form-control" placeholder="username" required="required"/>
        </div> 
        <div className="input-group" id='phone'>
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <span className="fa fa-phone"></span>
                    </span>                    
                </div>
                <input type="date" className="form-control" placeholder="date" required="required"/>
        </div> 
        
        <button className="btn btn-primary submitbtn" type="submit">Submit</button>
    </form>    
   </div>
    </div>
      </div>
    </React.Fragment>
  )
    
  );
}
