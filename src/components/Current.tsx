import {useSelector} from "react-redux";
import "../style/Current.scss"
import {useState} from "react";
import {getTime} from "../helper/function";

// export interface CurrentProps{
//     show:boolean;
//     setShow: React.Dispatch<React.SetStateAction<boolean>>
// }

const Current= () => {
    const [show, setShow] = useState<boolean>(false)
    // const [showAlert, setShowAlert] = useState<boolean>(false)

    // // @ts-ignore
    // const allData = useSelector(state => state?.MainReducer?.allData)
    // @ts-ignore
    const current = useSelector(state => state?.MainReducer?.current)


    // console.log('current',current)
    const currentTemp = parseInt(current[0]?.temp?.day)
    const description = current[0]?.weather[0].main
    const wind = current[0]?.wind_speed
    const humidity = current[0]?.humidity
    const pressure = current[0]?.pressure
    const uvi = current[0]?.uvi
    const high = parseInt(current[0]?.temp.max)
    const low =  parseInt(current[0]?.temp.min)
    const time = current[0]?.dt



    return(
        <>
            <div className='currentContainer'>
                <div className='currentInfo'>
                    <h2 className='location'>Montreal, Quebec {getTime(time)}</h2>
                    <div className='currentWeather'>
                        <div className='iconAndTem'>
                            <img src={`https://openweathermap.org/img/wn/${current[0]?.weather[0]?.icon}@2x.png`} alt=""/>
                            <div className='num'>{currentTemp}</div><div className='celsius'>℃</div>
                        </div>
                        <div className='hiAndLow'>
                            <div>High: {high}℃</div>
                            <div>Low: {low}℃</div>
                        </div>
                    </div>
                    <div className='description'>{description}</div>
                    <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show more information"}</button>
                    {
                        show ?
                            <div className='moreInfo'>
                                <div>Wind Speed: {wind}m/s </div>
                                <div>Humidity: {humidity}%  </div>
                                <div>Pressure: {pressure}hPa  </div>
                                <div>uvi: {uvi}    </div>
                            </div>
                            :undefined
                    }
                    <div className='moreInfoForSmallScreen'>
                        <div>Wind Speed: {wind}m/s </div>
                        <div>Humidity: {humidity}%  </div>
                        <div>Pressure: {pressure}hPa  </div>
                        <div>uvi: {uvi}    </div>
                    </div>
                </div>
                {/*{*/}
                {/*    allData.alerts*/}
                {/*    &&*/}
                {/*    <div className='alertBtn' onClick={()=>{setShowAlert(!showAlert)}}> {allData.alerts.length} </div>*/}
                {/*}*/}
                {/*{*/}
                {/*    allData?.alerts?.map((value: any, index: number) => {*/}
                {/*        return (*/}
                {/*            <div className={`alert ${showAlert ? "showA" : "hideA"}`} key={index}>*/}
                {/*                <h3>{value.sender_name}</h3>*/}
                {/*                <div>{getTime(value.start)} - {getTime(value.end)}</div>*/}
                {/*                <div>{value.description}</div>*/}
                {/*            </div>)*/}
                {/*    })*/}
                {/*}*/}
            </div>
        </>
    )
}

export default Current


