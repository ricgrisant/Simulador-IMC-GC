
  export function calcularIMC(estatura,peso) {
      var alturaMetros=estatura/100 
      var imc = peso / Math.pow(alturaMetros,2)
      return imc  
  }

  export function calcularGC(cuello,cintura,cadera,altura,mujer) {
      var resultado;
      if (mujer) {
          if(cadera){
            resultado = (495)/(1.29579-0.35004*(Math.log10(Number(cintura) + Number(cadera)-cuello))
            +0.22100*(Math.log10(altura)))-450
          } else {
            alert("Por favor introduzca la medida de su cadera")
            return null
          }   
      }
      else if (!cuello || !cintura || !altura){
          alert("Error en datos, por favor verifique que todos los campos han sido llenados ") 
          return null
        }  
      else {
        resultado = (495)/(1.0324-0.19077*(Math.log10(cintura-cuello))
          +0.15456*(Math.log10(altura)))-450
      }

      if (mujer && resultado<10) {
          alert("revise los datos, el mínimo de grasa para la supervivencia de una mujer es 10%")
          return null
      } else if(resultado<2){
        alert("revise los datos, el mínimo de grasa para la supervivencia de un hombre es 2%")
        return null   
      }
      else{
          return resultado
      }
  }
