//selectores de botones 
let pantalla = document.querySelector("canvas");
let nuevoJuego = document.getElementById("boton-nuevoJuego").style.display = "none"
let salirJuego = document.getElementById("botonSalir").style.display = "none"
let agregarPalabra = document.getElementById("agregarPalabra").style.display = "none"
let botonJuegoNuevo = document.getElementById("boton-nuevoJuego");
let botonSalir = document.getElementById("botonSalir");
let cancelarJuego = document.getElementById("cancelarJuego");

// variables 
let palabras = ["HOLA", "BIENVENIDOS", "ALURA", "PROGRAMACION", "HTML", "JAVASCRIPT", "CSS"];
let tablero = document.getElementById("juego").getContext("2d");
let palabraSecreta = "";
let letras = [];
let palabraCorrecta = "";
let errores = 8;
let letrasIncorrectas = [];
let numeroErrores = 8;
let letraElegida = [];

//capturamos el click de iniciar el juego y direccionamos al programa que inicia el juego
document.getElementById("iniciarJuego").onclick = () => {
    iniciarJuego();
}

//capturamos el boton de guardar la palabra agregada y empezamos el juego
document.getElementById("boton-guardar").onclick = () => {
    guardarPalabra();
}

//actualizamos la pantalla cuando el usuario hace click en "nuevo juego"
botonJuegoNuevo.addEventListener("click", function (){
    location.reload();
})

//actualizamos la pantalla cuando el usuario hace click en salir
botonSalir.addEventListener("click", function(){
    location.reload();
})

//actualizamos la pantalla cuando el usuario haga click en cancelar
cancelarJuego.addEventListener("click", function(){
    location.reload();
})

//palabra secreta 
function palabraRandom(){
    let palabra = palabras[Math.floor(Math.random()* palabras.length)]
    palabraSecreta = palabra;
    console.log(palabraSecreta);
}
//verificamos las letras ingresadas 
function verificarLetraIngresada(key) {
    if (letras.length < 1 || letras.indexOf(key) < 0) {
      letras.push(key)
      return false
      
    }
    else {
      letras.push(key)
      return true
    }
  }

  //letra correcta
  function colocarLetraCorrecta(i) {
    palabraCorrecta += palabraSecreta[i].toUpperCase()
  }

  //letra incorrecta
  function colocarLetraIncorrecta(letter) {
    if (palabraSecreta.indexOf(letter) <= 0) {
      errores -= 1
    }
  }

  //fin del juego
  function finJuego(letra) {
    //La letra ha sido incluída en el array de las letras correctas o incorrectas
   if(letraElegida.length < palabraSecreta.length) { 
      //incluye las letras ya digitadas en el array
      letrasIncorrectas.push(letra);
      
  
      //valida se el usuário cometió el numero maximo de errores
      if (letrasIncorrectas.length > numeroErrores) {
        perdiste()
      }
      else if(letraElegida.length < palabraSecreta.length) {
        colocarLetraIncorrecta(letra)
        letraIncorrecta(letra, errores)
      }
    }
   }

  //palabra acertada
  function usuarioGanador(letra) {
    letraElegida.push(letra.toUpperCase());
    if (letraElegida.length == palabraSecreta.length) {
  
      ganaste()
      
    }
  
  }

  //impide que teclas como shift y otras, sean consideradas errores y sean escritas
  function verificarLetra(keyCode) {
    if (typeof keyCode === "number" && keyCode >= 65 && keyCode <= 90) {
      return true;
    } else {
      return false;
    }
  }
  

  //pantalla para agregar palabra  
  function pantallaAgregarPalabra() {
    document.getElementById("botones-home").style.display = 'none';
    document.getElementById("agregarPalabra").style.display = "block";
  
  }
// guarda la palabra que el usuario quiere agregar
function guardarPalabra() {
  
  //captura lo que el usuario ha digitado
  let nuevaPalabra = document.getElementById("input-nuevaPalabra").value;

  // incluye la palabra que el usuario digitó en el array de las palabras a seren sorteadas
  if(nuevaPalabra !== ""){
    palabras.push(nuevaPalabra.toUpperCase());
    alert('La palabra fue guardada')
    
  
    // haz con que los componentes de la pantalla de agregar palabra desaparezcan
    document.getElementById("agregarPalabra").style.display = "none";
    iniciarJuego();
  }
  else{
    alert("Ninguna palabra ha sido digitada")
  }

}
//iniciar juego 
function iniciarJuego(){
    document.getElementById("botones-home").style.display = "none";

    dibujarCanvas();
    palabraRandom();
    dibujarLinea();

    //aparecen los botones de nuevo juego
    document.getElementById("boton-nuevoJuego").style.display = "block";
    document.getElementById("botonSalir").style.display = "block";

    //tomando las letras que se escriben
    document.onkeydown = (e) => {
      let letra = e.key.toUpperCase();
    //vemos si el usuario aun no ha perdido
    if (letrasIncorrectas.length <= numeroErrores){
      if(!verificarLetraIngresada(e.key) && verificarLetra(e.keyCode)){
       if(palabraSecreta.includes(letra)){
        colocarLetraCorrecta(palabraSecreta.indexOf(letra))
        for (let i = 0; i <palabraSecreta.length; i++){
          if(palabraSecreta[i] === letra){
            escribirPalabraCorrecta(i)
            usuarioGanador(letra);
          }
        }
     }
     //verificamos si el usuario perdio, llamamos la function de dibujar horca
     else{
      if (!verificarLetraIngresada(e.key) && !usuarioGanador(letra))return 
             dibujarAhorcado(errores);
             finJuego(letra)
    }
  }
}   
else{
  alert("SIGA INTENTADO")
    }
  }
}
