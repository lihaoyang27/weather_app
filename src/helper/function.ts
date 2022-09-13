import exp from "constants";


export const getTime = (time:number) => {
    let timestamp = time
    let date:any =new Date(timestamp * 1000);
    let humanDate:string = date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear()
    return humanDate
}

// export const debounce = (callback:(e:any) => void) => {
//     let timeout:any
//     return function(...args:any){
//         // @ts-ignore
//         const context:any= this
//         if (timeout) clearTimeout(timeout)
//         timeout = setTimeout(()=>{
//             timeout = null
//             callback.apply(context, args)
//         },1000)
//     }
// }