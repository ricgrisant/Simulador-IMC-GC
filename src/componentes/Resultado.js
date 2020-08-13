import React, {Component} from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

class Resultado extends Component {
     render() {
          
          const resultado = this.props.imc;
          console.log(resultado)
          const mensaje = (!resultado) ? 'LLene los datos de arriba y presione enviar' : 'Su índice de grasa corporal es:';
          return(
               <div className="gran-total">
                    {mensaje}
                    <TransitionGroup component="span" className="resultado">
                         <CSSTransition 
                              classNames="resultado"
                               key={resultado} 
                               timeout={{enter: 500, exit: 500}} >
                               <span>{resultado}</span>
                         </CSSTransition>
                    </TransitionGroup>
               </div>
          )
     }
}

export default Resultado;