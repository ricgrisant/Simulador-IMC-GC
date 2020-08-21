import React, { Component } from 'react'
import Select from 'react-select';
import {existePersona} from '../helper';

const personas= JSON.parse(window.localStorage.getItem('personas'));

//Filtramos sólo las personas que tienen más de dos registros

if (personas) {
    var persProyectables = [];
    for (let i = 0; i < personas.length; i++) {
        if (existePersona(personas,personas[i].idPersona) > 1) {
            persProyectables.push(personas[i])
        }
    }
}

//Sacar repetidos para el select
var clean = persProyectables.filter((persProyectables, index, self) =>
    index === self.findIndex((t) => (t.idPersona === persProyectables.idPersona)))

console.log(clean);

console.log(persProyectables);
const porDefec = [
    { value: 'Sin datos', label: 'Sin datos que mostrar' }
    ];


class Seleccion extends Component {

    state = {
        selectedOption: null,
      };

    opciones = {
        personas: persProyectables.filter((persProyectables, index, self) =>
        index === self.findIndex((t) => (t.idPersona === persProyectables.idPersona)))
      };

      handleChange = selectedOption => {
        this.setState({ selectedOption });
        //funcion obtenida como props de chart que envia el valor que selecciono a su padre(chart)
        this.props.renderizar(selectedOption);
      };

      

    render() { 
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
                        (this.opciones.personas.map((option) => ({
                        value: option.idPersona,
                        label: option.nombrePersona}) )) : (porDefec)}/>
            </div>
        )
    }
}

export default Seleccion;
