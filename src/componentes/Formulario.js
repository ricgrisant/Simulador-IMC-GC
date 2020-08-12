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

    //función que se dispara al enviar la información del formulario 
     handleSubmit = (e) =>  {
          e.preventDefault();

          this.props.addPersona(this.state);
     }
  

     render() {
          return (
              <form className="cotizar-auto" onSubmit={this.handleSubmit} >
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