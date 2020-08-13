import React, {Component} from 'react';

class Formulario extends Component {

  state = {
        nombrePersona : '', 
        idPersona : '',
        estatura : '', 
        peso : '',
        cirCintura : '',
        cirCuello : '',
        cirCaderaMuj : '',
        generoMujer : '',
        generoHombre : ''
    }
    //función para hacer el manejo de lo que es ingresado en los inputs
    handleFormulario = (e) => {
      this.setState({
        [e.target.id] : e.target.value
      })
    }

    //LLenado de forma aleatoria
    handleAleatorio= (e) => {
      var randBool = Math.random() >= 0.1
      this.setState({
        nombrePersona : Math.random().toString(36).substring(9), 
        idPersona : Math.floor(Math.random() * 100000000),
        estatura : Math.floor(Math.random() * 250), 
        peso : Math.floor(Math.random() * 500),
        cirCintura : Math.floor(Math.random() * 200),
        cirCuello : Math.floor(Math.random() * 101),
        cirCaderaMuj : Math.floor(Math.random() * 300),
        generoMujer : randBool,
        generoHombre : !randBool
      })
    }
    //función que se dispara al enviar la información del formulario 
     handleSubmit = (e) =>  {
          e.preventDefault();
          //envía la info al app root
          this.props.addPersona(this.state);
          alert("Se ha auto llenado los campos con los siguientes datos: " + 
          Object.keys(this.state).map((key) => "\n" + [key, this.state[key]] + "\n") )

          //vaciamos el formulario al enviar los datos
          e.target.reset();
     }
  

     render() {
          return (
              <form className="cotizar-auto" onSubmit={this.handleSubmit} >
                  <div className="campo">
                    <label>Llenado Aleatorio: </label>
                    <input className="random" type="button" value="Llenar Campos" onClick={this.handleAleatorio}></input>
                  </div>    

                  <div className="campo">
                    <label>Nombre: </label>
                    <input id="nombrePersona" onChange={this.handleFormulario}></input>
                  </div>

                  <div className="campo">
                    <label>ID Persona: </label>
                    <input id="idPersona" onChange={this.handleFormulario}></input>
                  </div>

                  <div className="campo">
                    <label>Estatura (cm): </label>
                    <input type="number" id="estatura" onChange={this.handleFormulario}></input>
                  </div>

                  <div className="campo">
                    <label>Peso (kg): </label>
                    <input type="number" id="peso" onChange={this.handleFormulario}></input>
                  </div>

                  <div className="campo">
                    <label>Circunferencia Cintura (cm): </label>
                    <input type="number" id="cirCintura" onChange={this.handleFormulario}></input>
                  </div>

                  <div className="campo">
                    <label>Circunferencia Cuello (cm): </label>
                    <input type="number" id="cirCuello" onChange={this.handleFormulario}></input>
                  </div>

                  <div className="campo">
                      <label>Género:</label>
                      <input type="radio" id="generoMujer" onChange={this.handleFormulario}  name="plan" value="mujer"/> Mujer
                      <input type="radio" id="generoHombre" onChange={this.handleFormulario}  name="plan" value="hombre"/> Hombre
                  </div>

                  {this.state.generoMujer ? (
                    <div className="campo">
                      <label>Circunferencia Cadera (cm): </label>
                      <input type="number" id="cirCaderaMuj" onChange={this.handleFormulario}></input>
                    </div>) : null}
  
                  <button type="submit" className="boton">Calcular</button>
              </form>
          );
      }
}
export default Formulario;