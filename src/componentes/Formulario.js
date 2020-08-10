import React, {Component} from 'react';

class Formulario extends Component {

     // refs son para leer los valores de los campos de un formulario
     refNombrePersona = React.createRef();
     refIdPersona = React.createRef();
     refEstatura = React.createRef();
     refPeso = React.createRef();
     refCirCintura = React.createRef();
     refCirCuello = React.createRef();
     refCirCaderaMuj = React.createRef();
     refGenero = React.createRef();

     calcularGrasa= (e) =>  {
          e.preventDefault();

          // leer el género
          const genero = this.refGenero.current.checked ? 'hombre' : 'mujer';

          // e.currentTarget.reset() 
     }

     render() {
          return (
              <form className="cotizar-auto" onSubmit={this.calcularGrasa} >
                  <div className="campo">
                    <label>Nombre: </label>
                    <input ></input>
                  </div>

                  <div className="campo">
                    <label>ID Persona: </label>
                    <input ></input>
                  </div>

                  <div className="campo">
                    <label>Estatura (cm): </label>
                    <input ></input>
                  </div>

                  <div className="campo">
                    <label>Peso (kg): </label>
                    <input ></input>
                  </div>

                  <div className="campo">
                    <label>Circunferencia Cintura: </label>
                    <input ></input>
                  </div>

                  <div className="campo">
                    <label>Circunferencia Cuello: </label>
                    <input ></input>
                  </div>

                  <div className="campo">
                    <label>Circ. Cadera (Sólo Mujer): </label>
                    <input ></input>
                  </div>
  
                  <div className="campo">
                      <label>Género:</label>
                      <input type="radio" ref={this.refGeneroMujer}  name="plan" value="mujer"/> Mujer
                      <input type="radio" ref={this.refGeneroHombre}  name="plan" value="hombre"/> Hombre
                  </div>
  
                  <button type="submit" className="boton">Calcular</button>
              </form>
          );
      }
}
export default Formulario;