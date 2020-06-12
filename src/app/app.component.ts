import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  palabra = 'PROGRAMAR';
  palabraOculta = ''
  
  intentos = 0;

  gano = false;
  perder = false;
  
  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
  'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
  constructor() {
    this.palabraOculta = "_ ".repeat(this.palabra.length);

  }

  comprobar( letra ){
    this.existeLetra(letra);

    let palabraOcultaArr = this.palabraOculta.split(' ');

    for (let i = 0; i<this.palabra.length; i++){
      if (this.palabra[i] === letra){
      palabraOcultaArr [i] = letra;
    }

    }
    this.palabraOculta = palabraOcultaArr.join(' ');
    this.verificaGane();
  }
  
  verificaGane(){
    const palabraArr = this.palabraOculta.split(' ');
    const palabraEvaluar = palabraArr.join("");

   if( palabraEvaluar === this.palabra) {
     this.gano = true;
     console.log ('Ganaste');
   }

   if ( this.intentos >= 9){
     this.perder = true;
      console.log ('Perdiste');
   }

  }

  existeLetra (letra ){
    if (this.palabra.indexOf(letra)>=0){
      

    }else{
      this.intentos ++;
    }
  }

}
