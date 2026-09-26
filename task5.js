export class Jugador {
  constructor(nombre, nivel){
    this.nombre = nombre
    this.nivel = nivel
    this.experiencia = 0
  
  }
   
  informacion(){ 
    return `${this.nombre} ha alcanzado el Nivel ${this.nivel}!`;
  }

  subirNivel(){
    this.nivel++
  }

  ganarExperiencia(puntos){
    this.experiencia = this.experiencia + puntos
    
    if (this.experiencia >= 100){
      this.subirNivel();
      this.experiencia = this.experiencia - 100;
    }
  }
}
