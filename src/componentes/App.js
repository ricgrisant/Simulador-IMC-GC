import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Resultado from './Resultado';
import Grafica from './Chart';
import EstUso from './estUso';
import Nav from './Nav';
import {calcularIMC, calcularGC, existePersona} from '../helper';
import { BrowserRouter, Route } from 'react-router-dom';



class App extends Component {

  state = {
    contador : 0,
    resultadoGrasaCorp: '',
    personas:{}
  }

  componentDidMount() {
    console.log("Esta listo");
  }

  //Guardar los datos de las personas en el local storage y el contador
  componentDidUpdate() {
      localStorage.setItem(
      'personas',JSON.stringify(this.state.personas)
      ) 

      localStorage.setItem(
        'contador',JSON.stringify(this.state.contador)
        )
  }

  addPersona = (persona) => {
    this.setState({
      contador : this.state.contador+1
   });
    //calculamos el imc y lo agregamos a persona
    persona.imc = calcularIMC(persona.estatura,persona.peso);

     //calculamos el %gc y lo agregamos a persona
      //calculamos el imc y lo agregamos a persona
    persona.grasaCorporal = calcularGC(persona.cirCuello,
      persona.cirCintura,
      persona.cirCaderaMuj,
      persona.estatura,
      persona.generoMujer);
    
    if (persona.grasaCorporal) {
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
  }

    console.log(this.state)
    console.log(this.state.personas)
  }

  render() {
    return (
      <BrowserRouter>
      <div className="contenedor">
        <Nav/>
        <Header titulo = 'Simulador Grasa Corporal'/>
        <Route path='/chart' component={() => <Grafica/>} />
        <Route path='/estUso' component={() => <EstUso/>} />
        <div className="contenedor-formulario">
          <Route path='/formulario' component={() => <Formulario addPersona={this.addPersona}/>} />
          <Resultado resultado={this.state.resultadoGrasaCorp}/> 
        </div>
        
      </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
