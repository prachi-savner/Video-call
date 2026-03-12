import React from 'react';
import {Link} from 'react-router-dom';
import "../App.css";
function LandingPage() {
    return ( 
        <div className='landingPageContainer'>
            <nav>
                <div className='navLeft'>
                    <h2>Apna Video Call</h2>
                </div>
                <div className='navRight'>
                    <Link to={"/guest"}  style={{color:"white", textDecoration:"none"}}>Join as Guest</Link>
                    <Link to={"/auth"} style={{color:"white", textDecoration:"none"}}>Register</Link>
                    <div role='button'>Login</div>
                </div>
            </nav>




            <div className="landingMainContainer">
                <div>
                    <h1><span style={{color:"#ff9839"}}>Connect</span> with your loved ones</h1>

                    <p>Cover a distance by Apna Call</p>
                    <div role="button">
                        <Link to={"/auth"}>Get Started</Link>
                    </div>
                </div>
                <div>
                    <img className='mobile' src='mobile.png'/>
                </div>
            </div>
        </div>
     );
}

export default LandingPage;