import * as echarts from 'echarts';
import EChartsReact from "echarts-for-react";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getTime} from "../helper/function";

const Chart= () => {
    // @ts-ignore
    const allData = useSelector(state => state?.MainReducer?.sevenDay)
    const [xAxis, setXAxis] = useState<string[]>([])
    const [max, setMax] = useState<number[]>([])
    const [min, setMin] = useState<number[]>([])



    // console.log('alldata',allData)

    const initXAxis = () => {
        if(!!allData){
            let tempArr:string[] = []
            let tempMinArr:number[] = []
            let tempMaxArr:number[] = []
            for(let value of allData){
                let temp:string = getTime(value?.dt)
                tempArr.push(temp)
                tempMaxArr.push( parseInt(value.temp.max))
                tempMinArr.push( parseInt(value.temp.min))
            }
            setXAxis(tempArr)
            setMax(tempMaxArr)
            setMin(tempMinArr)
        }
    }


    useEffect(() => {
        initXAxis()
    },[allData])

    type EChartsOption = echarts.EChartsOption;
    let option: EChartsOption;

    option = {
        title: {
            text: 'Temperature Change in the Coming Week'
        },
        tooltip: {
            trigger: 'axis'
        },

        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: xAxis
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} °C'
            }
        },
        series: [
            {
                name: 'Highest',
                type: 'line',
                data: max,
                markPoint: {
                    data: [
                        { type: 'max', name: 'Max' },
                        { type: 'min', name: 'Min' }
                    ]
                },
                markLine: {
                    data: [{ type: 'average', name: 'Avg' }]
                }
            },
            {
                name: 'Lowest',
                type: 'line',
                data: min,
                markPoint: {
                    data:  [
        { type: 'max', name: 'Max' },
        { type: 'min', name: 'Min' }
    ]
                },
                markLine: {
                    data: [
                        { type: 'average', name: 'Avg' },
                        [
                            {
                                symbol: 'none',
                                x: '90%',
                                yAxis: 'max'
                            },
                            {
                                symbol: 'circle',
                                label: {
                                    position: 'start',
                                    formatter: 'Max'
                                },
                                type: 'max',
                                name: '最高点'
                            }
                        ]
                    ]
                }
            }
        ]
    };



    return(
        <>
            <EChartsReact option={option} style={{padding:"20px 10px"}}/>
        </>
    )
}

export default Chart