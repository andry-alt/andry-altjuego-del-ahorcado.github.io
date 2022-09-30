//dibujando el tablero del ahorcado
function dibujarCanvas() {
    tablero.lineWidth=8
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle= "#F3F5FC"
    tablero.strokeStyle = "#0A3871"
    tablero.fillRect(0,0,1200,800)
    tablero.beginPath();
    tablero.moveTo(650,500)
    tablero.lineTo(900,500)
    tablero.stroke()
    tablero.closePath()
  }


//dibujando lineas
function dibujarLinea(){
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#0A3871";
    tablero.strokeStyle = "#0A3871";

    //creando el ciclo for 
    let anchura = 600/palabraSecreta.length;
    for (let i = 0; i < palabraSecreta.length; i++){
        
        tablero.moveTo(500 + (anchura*i), 640)
        tablero.lineTo(550 + (anchura*i), 640)
    }

    tablero.stroke();
    tablero.closePath();
}

//dibujando letras correctas en pantalla
function escribirPalabraCorrecta(index){
    tablero.font = 'bold 55px Inter';
    tablero.lineWidth = 6;
    tablero.lineCap = "round"
    tablero.lineJoin = "round";
    tablero.fillStyle = "#0A3871";

    //hacemos que las letras esten en el lugar correcto

    let anchura = 600/palabraSecreta.length
    tablero.fillText(palabraSecreta[index], 505+(anchura*index), 620)
    tablero.stroke()

}
//dibujando letras incorrectas en pantalla
function letraIncorrecta(letra, errorsLeft){
    tablero.font = 'bold 50px Inter';
    tablero.lineWidth = 6;
    tablero.lineCap = "round"
    tablero.lineJoin = "round";
    tablero.fillStyle = "#0A3871";
    tablero.fillText(letra, 535+(50*(10-errorsLeft)), 710, 50)
}

function dibujarAhorcado(puntaje) {
    tablero.lineWidth=8
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.strokeStyle = "#0A3871"
    if(puntaje===8){
    //poste lateral
    tablero.moveTo(700,500)
    tablero.lineTo(700,100)
    }
    if(puntaje===7){//teto 
    tablero.moveTo(850,100)
    tablero.lineTo(700,100)
    }
    if(puntaje===6){//corda
    tablero.moveTo(850,100)
    tablero.lineTo(850,171)
    }
    if(puntaje===5){//para cara
    tablero.moveTo(900,230)
    tablero.arc(850,230,50,0,Math.PI*2)
    }
    if(puntaje===4){//para corpo
    tablero.moveTo(850,389)
    tablero.lineTo(850,289)
    }
    if(puntaje===3){//para perna izquerda
    tablero.moveTo(850,389)
    tablero.lineTo(800,450)
    }
    if(puntaje===2){//para perna direita
    tablero.moveTo(850,389)
    tablero.lineTo(890,450)
    }
    if(puntaje===1){//para mão izquerda
    tablero.moveTo(850,330)
    tablero.lineTo(800,389)
    }
    if(puntaje===0){//para mão direita
    tablero.moveTo(850,330)
    tablero.lineTo(890,389)
    }
    tablero.stroke()
    tablero.closePath()
  }

  function perdiste() {
    tablero.font = ' bold 42px Inter';
    tablero.lineWidth=6
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle="red"
    tablero.fillText("Fin del juego!",930,320)
  }

  function ganaste() {
    tablero.font = 'bold 42px Inter';
    tablero.lineWidth=6
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle="green"
    tablero.fillText("Ganaste,",950,320)
    tablero.fillText("Felicidades!",930,360)
    setTimeout( recargar , 1000)
  }   

  function recargar(){
    location.reload(); 
  }