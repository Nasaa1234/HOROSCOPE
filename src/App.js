import React, { useState } from "react";
import bg from './assest/Background.png'
import './index.css'
import LeftBar from "./component/leftBar";
import Button from "./component/button";
import Horoscope from "./component/Horoscope";
import Dropdown from "./component/dropdown";
import Switch from "./component/switch";

function App() {
    const [show, setShow] = useState(true);
    const [next, setNext] = useState(true)
    return <div classNam='background'>
        <div className='bg'>
            <div className='horoscope'>HOROSCOPE</div>
            <div className='float'>
                <LeftBar show={show} setShow={setShow} />
                <Button show={show} setShow={setShow} />
            </div>
            <div>
                <Switch next={next} setNext={setNext} />
            </div>

        </div>

    </div>
}

export default App;
