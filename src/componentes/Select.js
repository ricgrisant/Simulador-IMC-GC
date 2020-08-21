import React, { Component } from 'react'
import Select from 'react-select';

const personas= JSON.parse(window.localStorage.getItem('personas'));


const porDefec =[
    { value: 'Sin datos', label: 'Sin datos que mostrar' }
];
class Seleccion extends Component {
    state = {
        selectedOption: null,
      };

    opciones = {
        personas: personas
      };

      handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(selectedOption);
      };

    render() {
        
        var contador = 0;
        if (personas) {
            for (let i = 0; i < personas.length; i++) {
                var pers = personas[i].idPersona;
                if ( pers === '1514' || pers === Number('1514')){
                    contador++
                  }    
            }
            console.log(contador);
        }
        
        console.log(this.opciones.personas);
        const { selectedOption } = this.state;
        return (
            <div>
            <div className="d-flex justify-content-center s-1 p-3 mb-2 bg-success text-white">
                <label>Personas Proyectables</label>
            </div>
                <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={
                        this.opciones.personas? 
                        (this.opciones.personas.map((option, idx) => ({
                        value: idx,
                        label: option.nombrePersona}) )) : (porDefec)}/>
            </div>
        )
    }
}

export default Seleccion;
