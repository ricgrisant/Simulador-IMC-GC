import React, {Component} from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

class Resultado extends Component {
     render() {
          
          const resultado = this.props.resultado;
          const mensaje = (resultado)? 'Su índice de grasa corporal es: ' 
          : 'LLene los datos de arriba y presione calcular -----   ';
          return(
               <div className="gran-total">
                    {mensaje}
                    <TransitionGroup component="span" className="resultado">
                         <CSSTransition 
                              classNames="resultado"
                               key={resultado} 
                               timeout={{enter: 500, exit: 500}} >
                               <span>{resultado? (parseFloat(resultado).toFixed(2) 
                               + ' %'):("Sin datos o error")}</span>
                         </CSSTransition>
                    </TransitionGroup>
               </div>
          )
     }
}

export default Resultado;