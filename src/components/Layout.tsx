import '../style/Layout.scss'
import {useDispatch, useSelector} from "react-redux";
import {getTime} from "../helper/function";
import {useState} from "react";
import {setDarkMode} from "../action";


const Layout = () => {
    const dispatch = useDispatch()
    // @ts-ignore
    const allData = useSelector(state => state?.MainReducer?.allData)
    // @ts-ignore
    const dark = useSelector(state => state?.MainReducer?.darkMode)
    const [showAlert, setShowAlert] = useState<boolean>(false)

    return(
        <>
        <div className='layoutContainer' style={dark ? {backgroundColor:"rgba(0,0,0,0.9)"} : {backgroundColor:"rgba(255,255,255,0.9)"}}>
            <div className='logo' style={dark ? {backgroundImage:'url(./media/LOGO_white.png)'} :{backgroundImage:'url(./media/LOGO_black.png)'}}></div>
            <div className='btnArea'>
                <div className='alertBtn' onClick={()=>{setShowAlert(!showAlert)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill={allData.alerts ? "orangered" : dark ? " white" : "black"}
                         className="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                        <path
                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                    </svg>
                </div>
                <div className='darkMode' onClick={() => {setDarkMode()(dispatch)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill={dark ? "white" : "black"}
                         className="bi bi-brightness-high" viewBox="0 0 16 16">
                        <path
                            d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                    </svg>
                </div>
            </div>
        </div>
            {
                showAlert
                &&
                allData?.alerts?.map((value: any, index: number) => {
                return (
                <div className='alert' key={index}>
                <h3>{value.sender_name}</h3>
                <div>{getTime(value.start)} - {getTime(value.end)}</div>
                <div>{value.description}</div>
                </div>)
            })
            }
            </>
    )
}

export default Layout