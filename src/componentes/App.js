import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Resultado from './Resultado';
import {calcularIMC, calcularGC} from '../helper';


class App extends Component {

  state = {
    resultadoGrasaCorp: 25,
    personas:{}
  }

  addPersona = (persona) => {
    //calculamos el imc y lo agregamos a persona
    persona.imc = calcularIMC(persona.estatura,persona.peso);

     //calculamos el %gc y lo agregamos a persona
      //calculamos el imc y lo agregamos a persona
    persona.grasaCorporal = calcularGC(persona.cirCuello,
      persona.cirCintura,
      persona.cirCaderaMuj,
      persona.estatura,
      persona.generoMujer);
      
    //Agregamos el valor del resultado actual
    this.setState({
      resultadoGrasaCorp : persona.grasaCorporal
    })
    //spread operator para no modificar el state directamente
    let pers = [...this.state.personas,persona]
    //asignarle al state personas el nuevo arreglo (se modifica
    //anteriormente el arreglo y se asigna de nuevo ya modificado)
    this.setState({
      personas: pers
    })

    console.log(persona)
  }

  render() {
    return (
      <div className="contenedor">
        <Header 
          titulo = 'Simulador Grasa Corporal'
        />
        <div className="contenedor-formulario">
          <Formulario addPersona={this.addPersona}/>
          <Resultado resultado={this.state.resultadoGrasaCorp}/>
          {console.log(this.state.resultadoGrasaCorp)}
        </div>
      </div>
    );
  }
}

export default App;
