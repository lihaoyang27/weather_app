import React, {useCallback} from 'react';
// import {debounce} from "../helper/function";

interface Props {
    setCity: React.Dispatch<React.SetStateAction<string>>
}

const InputCity:React.FC<Props> = ({setCity}) => {

    const debounce = (callback:(e:any) => void) => {
        console.log("debounce")
        let timeout:any
        return function(...args:any){
            // @ts-ignore
            const context:any = this
            if (timeout) clearTimeout(timeout)
            timeout = setTimeout(()=>{
                timeout = null
                callback.apply(context, args)
            },1000)
        }
    }
    const handleChange = (e: any) => {
        console.log(e.target.value)
        setCity(e.target.value)
    }
    const debounceHandleChange = useCallback(debounce(handleChange),[])

    return (
        <div className="citySearchContainer">
            <input type="text" onChange={debounceHandleChange}/>
        </div>
    );
}

export default InputCity;