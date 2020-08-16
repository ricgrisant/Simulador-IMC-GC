import React from 'react'
import { Line } from 'react-chartjs-2'

function Chart() {
    const datos = {
        //Lo que va en el pie de la gráfica, en este caso los meses
        labels: [1,2,3,4,5,6,7,8,9,10,11,12],
        datasets: [{
            //El titulo de la gráfica
            label: 'Proyección de grasa corporal (en Meses)',
            //los datos
            data: [25,20,22,18,16,15,14,13,12,11,10,9]
        }]
    }
    return (
        <Line data={datos}/>
    )
}

export default Chart
