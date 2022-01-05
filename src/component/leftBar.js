import React from "react";
import SpaceX from '../assest/SpaceX 3D Model Render.png'
import '../index.css'
import { CheckTiles } from "./LeftBarCheckTile";

const LeftBar = ({ show , setShow}) => {

    return ( 
       <div className='leftBar'>
            {show ? <CheckTiles/> : <img src={SpaceX} className='spaceX'></img>}
        </div>
    )
}


export default LeftBar