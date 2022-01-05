import React, { useState } from "react";
import '../index.css'
import Check from '../assest/Check Icon.png'
import CheckGreen from '../assest/Check Icon (1).png'
import CheckOrange from '../assest/Check Icon (2).png'
import Change from "./svg";

const CheckText = ({ bigText, icon, smallText }) => {
    const [color, setColor] = useState('#9499C3')
    const [text, setText] = useState('Normal')


    
    const changeColor = () => {
        if (color === '#40C110') {
            setColor('#EA7B15');
            setText('Awaiting')
        }
        if (color === '#9499C3') {
            setColor('#40C110');
            setText('Applied')
        }
        if (color === '#EA7B15') {
            setColor('#9499C3');
            setText('Normal')
        }
    }



    return <div className='checkTextCon'>
        <Change color={color} />
        <div className='textCon'>
            <div className='bigText' onClick={changeColor}>{bigText} </div>
            <div className='smallText'  >{text}</div>
        </div>
    </div>
}

export default CheckText