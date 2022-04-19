import {DARK_MODE, FETCH_DATA, FETCH_PHOTO} from "../helper/constant"


export const initState = {
    allData:[],
    current:[],
    sevenDay:[],
    photo:{},
    darkMode:false,
}


const MainReducer = (state = initState, action:any) => {
    const {type, payload} = action

    switch (type){
        case FETCH_DATA:

            const currentTemp = payload.data.daily.splice(0,1)
            const sevenDayTemp = payload.data.daily.slice(0)
            console.log('cu',currentTemp)
            console.log('77',sevenDayTemp)
            return {...state, allData:payload.data, current: currentTemp, sevenDay: sevenDayTemp}

        case FETCH_PHOTO:
            console.log('fetchPhoto',payload)
            return {...state, photo:payload}

        case DARK_MODE:
            let dark = !state.darkMode
            return{...state, darkMode: dark}

        default:
            return state
    }
}

export default MainReducer