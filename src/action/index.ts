import {ACCESS_KEY, API_KEY, DARK_MODE, FETCH_DATA, FETCH_PHOTO} from "../helper/constant";
import axios from "axios";




export const fetchData = (geo:number[]) => async (dispatch:any) => {
    try {
        const result = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${geo[0]}&lon=${geo[1]}&exclude=current&units=metric&appid=${API_KEY}`)
        if (result.data) {
            console.log(result.data)
            dispatch({type: FETCH_DATA, payload: result})
        }
    }catch (e) {
        console.log(e)
    }

}

export const fetchPhoto = (query:string) => async (dispatch:any) => {
    console.log(query)
    try{
        const result = await axios.get(`https://api.unsplash.com/search/photos/?client_id=${ACCESS_KEY}&query=${query.toLowerCase()}`)
        // console.log(result)
        if(!!result){
            dispatch({
                type: FETCH_PHOTO,
                payload:result.data.results[0]
            })
        }
    }catch (e) {
        console.log(e)
    }
}

export const setDarkMode = () => (dispatch:any) => {
    dispatch({
        type: DARK_MODE
    })
}