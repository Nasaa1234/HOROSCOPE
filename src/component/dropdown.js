import React, { useState } from "react";

const Dropdown = ({ next, setNext, sign, setSign, date, setDate }) => {

    const Onchange = (e) => {
        e.preventDefault();
        setSign(e.target.value)
    }
    const Onchange1 = (e) => {
        e.preventDefault();
        setDate(e.target.value)
    }
    const True = () => {
        if (next == true) setNext(!next)
        console.log('Next=>', next)
    }

    return (
        <div className="Zurhai">
            <div className="Sign">
                <div className="Subtitle">SIGN</div>
                <select className="Sign_select" onChange={Onchange} value={sign}>
                    <option >Aries</option>
                    <option >Taurus</option>
                    <option >Gemini</option>
                    <option >Cancer</option>
                    <option >Leo</option>
                    <option >Virgo</option>
                    <option >Libra</option>
                    <option >Scorpio</option>
                    <option >Sagittarius</option>
                    <option >Capricorn</option>
                    <option >Aquarius</option>
                    <option >Pisces</option>
                </select>
            </div>
            <div className="Sign1">
                <div className="Subtitle">DATE</div>
                <select className="Sign_select" onChange={Onchange1} value={date}>
                    <option>Today</option>
                    <option>Yesterday</option>
                    <option>Tomorrow</option>
                </select>
            </div>
            <button className='Next' onClick={True}>Next</button>
        </div>
    );
}

export default Dropdown;