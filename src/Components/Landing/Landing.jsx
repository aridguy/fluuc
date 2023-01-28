import React from "react";

import './Landing.css'
import Mockup from '../../Assets/bkgmockup.png'
import Vector from '../../Assets/Vector.png'

const Landing = () => {
    return (
        <div>
            <div className="container mt-5 pt-5"></div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6">
                        <h1 className="headings display-5">A <s>flock</s> <small className="brands">fluuc</small> of Cards <br />
                            <ar>The One-Way Pay.</ar>
                        </h1>
                        <small className="ex-txt">Make payment with just one end-point. <br />
                            <small className="brands">Stack</small> your balances with an intuitive <br /> interface. Never get stranded at checkouts.
                        </small> <br />
                        <div className="mt-5">
                            <button className="botin2">Join the Waitlist 
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                             <img width='8%' src={Vector} alt='vector' /></button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={Mockup} alt='background-image' className="mockup pb-5" />

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Landing