import CheckText from "./checkText";
import Check from '../assest/Check Icon.png'
import react, { useState } from "react";
import CheckGreen from '../assest/Check Icon (1).png'
import CheckOrange from '../assest/Check Icon (2).png'

export const CheckTiles = () => {

    return (
        <div>
            <CheckText bigText='ALL SYSTEM CHECK' smallText='Normal' />
            <CheckText bigText='RENDEZVOUS BURN SLOW' smallText='Normal' />
            <CheckText bigText='PREPARE RENDEZVOUS BURN' smallText='Normal' />
            <CheckText bigText='THERMAL SHIELD' smallText='Applied' />
            <CheckText bigText='BURN Go/No-GO' smallText='Normal' />
            <CheckText bigText='POWER COMPLETION' smallText='Awaiting' />
            <CheckText bigText='STATION DECK CHECK' smallText='Normal' />
        </div>
    )
}