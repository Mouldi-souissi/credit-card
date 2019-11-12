import React from 'react';
import logo from "./assets/sim.png"

const Card=()=>{
    return (
    <div className="card">
        <p className="title">CREDIT CARD</p>
        <img className="chip"src={logo} alt="logo"/>
        <p className="rip"> 1313 1223 1598 3578 </p>
        <div className="data">
            <p className="nums">5222</p>
            <div className="data2">
                <p className="titleValid">VALID<br/> THRU</p>
                <div className="valid">
                    <p className="MY">MONTH/YEAR</p>
                    <p className="date">11/50</p>
                </div>
            </div>
        </div>
        <p className="holder">CARD HOLDER</p>
        <img className="logoMaster" src="http://pngimg.com/uploads/mastercard/mastercard_PNG9.png" alt="logomaster"/>
    </div> )
}
export default Card;

