import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Resultado from './Resultado';
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../helper';


class App extends Component {

  state = {
    personas: [
      {nombrePersona: "monica", idPersona: "12345", estatura: "1", peso: "2", cirCintura: "3"}
    ]
  }

  addPersona = (persona) => {
    //spread operator para no modificar el state directamente
    let pers = [...this.state.personas,persona]
    //asignarle al state personas el nuevo arreglo (se modifica
    //anteriormente el arreglo y se asigna de nuevo ya modificado)
    this.setState({
      personas: pers
    })
  }

  render() {
    return (
      <div className="contenedor">
        <Header 
          titulo = 'Simulador Grasa Corporal'
        />
        <div className="contenedor-formulario">
          <Formulario addPersona={this.addPersona}/>
          <Resultado/>
        </div>
      </div>
    );
  }
}

export default App;
