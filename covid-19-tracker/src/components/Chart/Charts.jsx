import { CardContent, Grid, Typography } from "@material-ui/core";
import react, { useEffect, useState } from "react";
import { fetchDailyData } from "../../api";
import styles from './Chart.module.css';
import { Line, Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const Charts = ({ data: { confirmed, recovered, deaths }, country }) => {
    const [dailyData, setDailyData] = useState([])
    useEffect( async () => {
        //we can't use async inside useEffect
        //so we need to create another function
        const fetchApi = async () => {
            setDailyData(await fetchDailyData());
        }
        fetchApi();
        console.log(dailyData)
    }, [])
    
    const lineChart = (
        dailyData.length
        ? (
            <Line 
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets:[{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true
                    }, {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 2.5)',
                        fill: true
                    }]
                }}
            />
        ) : null
    );

    const barChar = (
        confirmed
        ? (
            <Bar 
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: [
                            'rgba(0, 0, 255, 0.5)',
                            'rgba(0, 255, 0, 2.5)',
                            'rgba(255, 0, 0, 2.5)'
                        ],
                        data: [confirmed.value, recovered.value, deaths.value]
                    }]
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current state in ${country}` }
                }}
            />
        ) : null
    )

    return (
       <div className={styles.container}>
           {country ? barChar : lineChart}
       </div>
    )
}

export default Charts;