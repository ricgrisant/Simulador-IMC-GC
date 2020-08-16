
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
        return (495)/(1.0324-0.19077*(Math.log10(cintura-cuello))
          +0.15456*(Math.log10(altura)))-450
          
      }


      if (mujer && resultado<10) {
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
