import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import Seleccion from './Select';

const personas= JSON.parse(window.localStorage.getItem('personas'));

const datos = {
    //Lo que va en el pie de la gráfica, en este caso los meses
    labels: [1,2,3,4,5,6,7,8,9,10,11,12],
    datasets: [{
        //El titulo de la gráfica
        label: 'Proyección de grasa corporal (en Meses)',
        backgroundColor: 'rgb(93, 188, 210)',
        borderColor: 'rgb(239, 166, 71)',
        //los datos
        data: []
    }
]}


class Grafica extends Component{
    state = {
        opcion: '',
        data : []
    }

    renderizar = (opcion) => {
        this.setState({
          opcion : opcion
       })}
       
    render(){
        if (personas) {
            let medidas = asignarMedidasGC(this.state.opcion.value,personas)
            let cambio = variacion(medidas).toFixed(2)
            console.log(cambio)
            let doce = doceMeses(medidas,cambio)
            datos.datasets[0].data = doce
        }
        
        return(
            <div className="grafica">
                <Seleccion renderizar={this.renderizar}/>
                <Line data={datos}/>
            </div>      
        )
    }
    
}


export default Grafica;


//funcion que tomara el id de la persona y calculara si aumento o disminuyo la grasa corporal
function asignarMedidasGC(id,persona) {
    var promedio = [];
    for (let i = 0; i < persona.length; i++) {
        if(persona[i].idPersona === id)
        {
            promedio.push(persona[i].grasaCorporal.toFixed(2));
        }
        
    }
    return promedio
}

//funcion para sacar la variacion entre la antepenultima y ultima medición
function variacion(medidas) {
    //obtenemos los últimos 2 valores
    let aux = medidas.slice(-2)
    let dif = aux[1] - aux[0]           
    return dif
    
}

//proyectar a 12 meses
function doceMeses(medidas,cambio) {
    if (medidas.length > 1) {
       for (let i = medidas.length; i < 12; i++) {
            medidas[i] = (Number(medidas[i-1]) + Number(cambio)).toFixed(2)    
    } 
    } else {
        for (let i = medidas.length; i < 12; i++) {
            medidas.push(0)
        }
    }
    
    return medidas
}