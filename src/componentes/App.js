import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Resultado from './Resultado';
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../helper';


class App extends Component {
  render() {
    return (
      <div className="contenedor">
        <Header 
          titulo = 'Simulador Grasa Corporal'
        />
        <div className="contenedor-formulario">
          <Formulario/>
          <Resultado/>
        </div>
      </div>
    );
  }
}

export default App;
