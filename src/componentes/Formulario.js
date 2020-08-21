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
      var randBool = Math.random() >= 0.5
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
          if (!this.state.nombrePersona  ||
          !this.state.idPersona  ||
          !this.state.estatura  ||
          !this.state.peso  ||
          !this.state.cirCintura  ||
          !this.state.cirCuello) {
            alert("Llene todos los datos")
        } else {
  
          this.props.addPersona(this.state);
          //vaciamos el formulario al enviar los datos
          e.target.reset();
      }
     }
  

     render() {
          return (
              <form className="cotizar-auto" onSubmit={this.handleSubmit} >
                  <div className="row campo">
                    <div className="col">
                      <label>Llenado Aleatorio: </label>
                    </div>
                    <div className="col">
                      <input className="random" type="button" value="Llenar Campos" onClick={this.handleAleatorio}></input>
                    </div> 
                  </div>

                  <div className="row campo">
                    <div className="col">
                      <label>Nombre: </label>
                    </div>
                    <div className="col">
                      <input defaultValue={this.state.nombrePersona} id="nombrePersona" onChange={this.handleFormulario}></input>
                    </div> 
                  </div>

                  <div className="row campo">
                    <div className="col">
                      <label>ID Persona: </label>
                    </div>
                    <div className="col">
                      <input defaultValue={this.state.idPersona} id="idPersona" onChange={this.handleFormulario}></input>
                    </div> 
                  </div>

                  <div className="row campo">
                    <div className="col">
                      <label>Estatura (cm): </label>
                    </div>
                    <div className="col">
                      <input defaultValue={this.state.estatura} type="number" id="estatura" onChange={this.handleFormulario}></input>
                    </div> 
                  </div>

                  <div className="row campo">
                    <div className="col">
                      <label>Peso (kg):</label>
                    </div>
                    <div className="col">
                      <input defaultValue={this.state.peso} type="number" id="peso" onChange={this.handleFormulario}></input>
                    </div> 
                  </div>

                  <div className="row campo">
                    <div className="col">
                      <label>Cintura (cm): </label>
                    </div>
                    <div className="col">
                      <input defaultValue={this.state.cirCintura} type="number" id="cirCintura" onChange={this.handleFormulario}></input>
                    </div> 
                  </div>

                  <div className="row campo">
                    <div className="col">
                      <label>Cuello (cm): </label>
                    </div>
                    <div className="col">
                      <input defaultValue={this.state.cirCuello} type="number" id="cirCuello" onChange={this.handleFormulario}></input>
                    </div> 
                  </div>

                  <div className="row campo">
                    <div className="col-4">
                      <label>Género:</label>
                    </div>

                    <div className="col-4">
                      <input checked={this.state.generoMujer} type="radio" id="generoMujer" onChange={this.handleFormulario}  name="plan" value="mujer"/>Fem
                    </div>

                    <div className="col-4">
                      <input checked={this.state.generoHombre} type="radio" id="generoHombre" onChange={this.handleFormulario}  name="plan" value="hombre"/>Mas
                    </div>
                  </div>
                  {/* Operador ternario que busca la condición de si es mujer o no para mostrar el imput de la cadera*/}
                  {this.state.generoMujer ? (
                    <div className="row campo">
                      <div className="col">
                        <label>Circunferencia Cadera (cm): </label>
                      </div>
                      <div className="col">
                        <input defaultValue={this.state.cirCaderaMuj} type="number" id="cirCaderaMuj" onChange={this.handleFormulario}></input>
                      </div> 
                  </div>) : null}
  
                  <button type="submit" className="boton">Calcular</button>
              </form>
          );
      }
}
export default Formulario;