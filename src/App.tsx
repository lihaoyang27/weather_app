import React, {useEffect, useState} from 'react';

import './App.scss';
import {fetchData, fetchPhoto} from "./action";
import {useDispatch, useSelector} from "react-redux";
import Main from './components/Main';
import Layout from "./components/Layout";
import InputCity from "./components/InputCity";


function App() {
 const dispatch = useDispatch()
    // @ts-ignore
    const photo = useSelector(state => state?.MainReducer?.photo)
    // @ts-ignore
    const current = useSelector(state => state?.MainReducer?.current)
    // const [welcome, setWelcome] = useState(true)
    const [city, setCity] = useState<string>("montreal")
    const [geo, setGeo] = useState<number []>([45.5088,-73.5878])

    useEffect(()=>{
        console.log(city)
    },[city])



  useEffect(()=>{
    fetchData(geo)(dispatch)
      // setTimeout(()=>{setWelcome(!welcome)},3500)
  },[])

    useEffect(() => {
        fetchPhoto(current[0]?.weather[0]?.main)(dispatch)
    },[current])

    //TODO: get geolocation of the input city

  return (
    <div className="App" style={photo && {backgroundImage: `url(${photo?.urls?.regular})`}}>
        {/*{*/}
        {/*    welcome*/}
        {/*    &&*/}
        {/*    <Welcome/>*/}
        {/*}*/}
        <Layout/>
        {/*<InputCity setCity={setCity}/>*/}
        <Main />
    </div>
  );
}

export default App;
