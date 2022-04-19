

export const getTime = (time:number) => {
    let timestamp = time
    let date:any =new Date(timestamp * 1000);
    let humanDate:string = date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear()
    return humanDate
}