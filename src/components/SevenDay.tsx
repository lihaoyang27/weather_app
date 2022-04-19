import "../style/SevenDay.scss"
import {useSelector} from "react-redux";
import {getTime} from "../helper/function";

const SevenDay = () => {
    // @ts-ignore
    const seven = useSelector(state => state?.MainReducer?.sevenDay)





    return(
        <>
            <div className='sevenDayContainer'>
                <div className='listHeader'>
                    <div>Date</div>
                    <div>Temperature</div>
                    <div>Description</div>
                    <div>POP</div>

                </div>
                {
                    seven &&
                    seven.map((value:any, index:number) => {
                        const timeStamp = parseInt(value?.dt)
                        return(
                            <div key={index} className='infoContainer'>
                                <div className="date">
                                    { getTime(timeStamp) }
                                    {/*{new Date(value?.dt * 1000)}*/}
                                </div>
                                <div className='hiAndLowTemp'>
                                    <span>High: { parseInt(value?.temp.max)}℃</span>
                                    <span>Low: { parseInt(value?.temp.min)}℃</span>
                                </div>
                                <div className='des'>
                                    <img src={`https://openweathermap.org/img/wn/${value?.weather[0]?.icon}@2x.png`} alt="icon" className='imgIcon'/>
                                    <div className='desText'>{value?.weather[0]?.main}</div>
                                </div>
                                <div className='pop'>
                                    {value?.pop.toFixed(1) * 100 } %
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default SevenDay


