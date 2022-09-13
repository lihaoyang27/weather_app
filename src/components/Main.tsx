
import "../style/Main.scss"
import Current from "./Current";
import {useDispatch, useSelector} from "react-redux";
import SevenDay from "./SevenDay";
import Chart from "./Chart";
import React, {useEffect} from "react";




const Main = () => {
    // @ts-ignore
    const dark = useSelector(state => state?.MainReducer?.darkMode)



    return(
        <>
            <div className='mainContainer' style={dark ? {backgroundColor:"rgba(0,0,0,0.9)",color:"white"}
                : {backgroundColor:"rgba(255,255,255,0.9)",color:"black"}}>
                <Current />
                <SevenDay/>
                <Chart/>
            </div>
        </>
    )
}

export default Main