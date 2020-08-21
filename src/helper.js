
  export function calcularIMC(estatura,peso) {
      var alturaMetros=estatura/100 
      var imc = peso / Math.pow(alturaMetros,2)
      return imc  
  }

  //Función de ayuda para calcular el imc de hombre y de mujer según caso
  export function calcularGC(cuello,cintura,cadera,altura,mujer) {
      var resultado;
      if (mujer) {
          if(cadera){
            resultado = (495)/(1.29579-0.35004*(Math.log10(Number(cintura) + Number(cadera)-cuello))
            +0.22100*(Math.log10(altura)))-450
          } else {
            alert("Por favor introduzca la medida de su cadera")
            return false
          }   
      } else {
          resultado =  (495)/(1.0324-0.19077*(Math.log10(cintura-cuello))
          +0.15456*(Math.log10(altura)))-450 }

      if (isNaN(resultado)){
        alert('revise sus datos, estos son erróneos')
        return false

      }else if (mujer && resultado<10) {
          alert("revise los datos, el mínimo de grasa para la supervivencia de una mujer es 10%")
          return false
      } else if(resultado<2){
        alert("revise los datos, el mínimo de grasa para la supervivencia de un hombre es 2%")
        return false   
      }
      else{
          return resultado
      }
  }

  //Función para ver si ya se encuentra la persona en localstorage

  export function existePersona(idPersona){
    var personas= JSON.parse(window.localStorage.getItem('personas'));
    var contador = 0;
        if (personas) {
            for (let i = 0; i < personas.length; i++) {
                var pers = personas[i].idPersona;
                if ( pers === idPersona || pers === Number(idPersona)){
                    contador++
                  }    
            }
        }

    return contador
  }
