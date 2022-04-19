import {DARK_MODE, FETCH_DATA, FETCH_PHOTO} from "../helper/constant"


export const initState = {
    allData:[],
    sevenDay:[],
    current:[],
    photo:{},
    darkMode:false,
}


const MainReducer = (state = initState, action:any) => {
    const {type, payload} = action

    switch (type){
        case FETCH_DATA:
            const temp = {...payload}
            const sevenDayTemp = temp.data.daily
            sevenDayTemp.pop()

            return {...state, allData: payload.data, current: payload.data.daily, sevenDay: sevenDayTemp}

        case FETCH_PHOTO:
            // console.log('fetchPhoto',payload)
            return {...state, photo:payload}

        case DARK_MODE:
            let dark = !state.darkMode
            return{...state, darkMode: dark}

        default:
            return state
    }
}

export default MainReducer