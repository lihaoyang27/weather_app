import React, {useEffect, useState} from 'react';

import './App.scss';
import {fetchData, fetchPhoto} from "./action";
import {useDispatch, useSelector} from "react-redux";
import Main from './components/Main';
import Layout from "./components/Layout";
import Welcome from "./components/Welcome";

function App() {
 const dispatch = useDispatch()
    // @ts-ignore
    const photo = useSelector(state => state?.MainReducer?.photo)
    // @ts-ignore
    const current = useSelector(state => state?.MainReducer?.current)
    // const [welcome, setWelcome] = useState(true)
    // const [city, setCity] = useState<string>("montreal")


  useEffect(()=>{
    fetchData()(dispatch)
      // setTimeout(()=>{setWelcome(!welcome)},3500)
  },[])

    useEffect(() => {
        fetchPhoto(current[0]?.weather[0]?.main)(dispatch)
    },[current])

  return (
    <div className="App" style={photo ? {backgroundImage: `url(${photo?.urls?.regular})`,} : undefined}>
        {/*{*/}
        {/*    welcome*/}
        {/*    &&*/}
        {/*    <Welcome/>*/}
        {/*}*/}
        <Layout/>
        <Main />
    </div>
  );
}

export default App;
