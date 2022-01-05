import React, { useState } from "react";
import Dropdown from "./dropdown";
import Horoscope from "./Horoscope";

const Switch = ({ next, setNext }) => {
    const [sign, setSign] = useState('aries')
    const [date, setDate] = useState('today')
    console.log(sign)
    return <div>
        {next ? <Dropdown next={next} setNext={setNext} sign={sign} date={date} setSign={setSign} setDate={setDate} /> : <Horoscope next={next} setNext={setNext} sign={sign} date={date}/>}
    </div>
}

export default Switch