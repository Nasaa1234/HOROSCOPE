import react, { useState, useEffect } from "react";
import axios from 'axios'
import '../index.css'
import Loading from "./loading";

const Horoscope = ({ sign, date, next, setNext }) => {
    const [data, setData] = useState();




    useEffect(() => {
        var options = {
            method: 'POST',
            url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
            params: { sign: sign, day: date },
            headers: {
                'x-rapidapi-host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
                'x-rapidapi-key': '556b402be5msha44b7574e892202p147fc1jsn15ed2436cdf6'
            }
        };

        axios.request(options).then(function (response) {
            setData(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    const False = () => {
        if (next == false) setNext(!next)
        console.log('Next=>', next)
    }

if(!data) {
    return <Loading/>
}

    return <div >
        {console.log(data)}
        <div className='inline'>

            <div className='color'>
                <div className="column">
                    <div>COLOR</div>
                    <div style={{ marginTop: "1vh", color: data.color, fontSize: '30px' }}>{data.color}</div>
                </div>
            </div>

            <div className='color1'>
                <div className="column">
                    <div>LUCKY TIME</div>
                    <div style={{ marginTop: "1vh", fontSize: '30px', color: '#96E27B' }}>{data.lucky_time}</div>
                </div>
            </div>
            <div className='color1'>
                <div className="column">
                    <div>LUCKY NUMBER</div>
                    <div style={{ marginTop: "1vh", fontSize: '30px', color: '#AD7A4B' }}>{data.lucky_number}</div>
                </div>
            </div>
            <div className='color1'>
                <div className="column">
                    <div>MOOD</div>
                    <div style={{ marginTop: "1vh", fontSize: '30px', color: '#74CCBC' }}>{data.mood}</div>
                </div>
            </div>
            <div className='color1'>
                <div className="column">
                    <div>COMPATIBILITY</div>
                    <div style={{ marginTop: "1vh", fontSize: '30px', color: '#C65858' }}>{data.compatibility}</div>
                </div>
            </div>

        </div>
        <div className="description-container">
            <div className='description'>
                {data.description}
            </div>
        </div>
        <button className='prev' onClick={False}>Prev</button>

    </div>
}

export default Horoscope