import React, { useState } from "react";
import '../index.css'
import LeftBar from "./leftBar";


const Button = ({show, setShow}) => {





    const toggleSystem = () => {
        if (show == false) setShow(!show)
        console.log(show)
    };


    const toggleCabin = () => {
        if (show == true) setShow(!show)
        console.log(show)
    };

    return <div className='Cabin'>
        {/* {show == true ? <button onClick={toggleSystem} className={show ? "system" : "system1"}>SYSTEMS</button> : 'hi'} */}
        <button className={show ? "system1" : "system"} onClick={toggleSystem}>SYSTEMS</button>
        <button className={show ? "cabin" : "cabin1"} onClick={toggleCabin}>CABIN</button>

        {/* //     <button className='system'  onClick={toggleSystem}>SYSTEMS</button>
    //    <button className='cabin1' onClick={toggleCabin} >CABIN</button> */}
    </div>
}

export default Button