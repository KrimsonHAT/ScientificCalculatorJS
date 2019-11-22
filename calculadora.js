window.onload = function(){
    pantalla=document.getElementById("Pantalla");
    pantallaBaja = document.getElementById("pantallaBaja");
}
guardarNum="0";
iniciarNum=1;
punto=0;
numEspera=0;
operacionEnCurso="no";
numMemory = 0;
operacionEnCadena1 = 0;



function numero(num) {
if (guardarNum=="0" || iniciarNum==1  ) {
  pantalla.innerHTML=num;
  guardarNum=num;
  if(num == "."){
   pantalla.innerHTML = "0.";
   guardarNum = num;
   punto = 1;
   }
}
else {
   if(num =="." && punto == 0){
       pantalla.innerHTML+=num;
       guardarNum+=num;
       punto =1;
   }
    else if (num=="." && punto==1) {}
      
    else {
        pantalla.innerHTML+=num;
        guardarNum+=num
    }
 }
 iniciarNum=0
  }

function operar(operacion) {
    operacionEnCurso1 = operacion;
    memory();
   igual();
   numEspera=guardarNum;
   operacionEnCurso=operacion;
   iniciarNum=1;
  
}



function igual() {
    
       if (operacionEnCurso=="no" ) {
          pantalla.innerHTML=guardarNum;   
          pantallaBaja.innerHTML = guardarNum + operacionEnCurso1; 
          if(operacionEnCurso1 == '**'){
            pantallaBaja.innerHTML = guardarNum + " ^ " ; 
        }
        
       
          }
       else {
           operacionCadena = numEspera+operacionEnCurso+guardarNum;
           solucion = eval(operacionCadena);
           pantallaBaja.innerHTML = operacionCadena + " = " + solucion;
           pantalla.innerHTML = solucion;
           if(operacionEnCurso=='**'){
               pantallaBaja.innerHTML = numEspera + " ^ " + guardarNum + " = " + solucion; 
           }  if(operacionEnCurso1 == '**'){
            pantallaBaja.innerHTML = numEspera + " ^ " + guardarNum + " = "+ solucion; 
        }
           guardarNum = solucion;
           operacionEnCurso = "no";
          iniciarNum = 1;
          }
          
}

function memory(){
   
    if(operacionEnCurso =="no" ){
        pantallaBaja.innerHTML = guardarNum;
    }else{
        operacionEnCadena1 = numEspera+operacionEnCurso+guardarNum;
        sol = eval(operacionEnCadena1);
        pantallaBaja.innerHTML = operacionEnCadena1 + " = "+ sol;
        pantalla.innerHTML = sol;
        guardarNum = sol;
        operacionEnCurso = "no";
        iniciarNum = 1;
    }
}

function borradoParcial(){
   pantalla.innerHTML = 0;
   guardarNum = 0;
   punto = 0;
}

function borradoTotal(){
    guardarNum="0";
    iniciarNum=1;
    punto=0;
    numEspera=0;
    operacionEnCurso="no";
    pantalla.innerHTML = guardarNum;
    pantallaBaja.innerHTML = guardarNum;
}

function back(){ 
    cifras=guardarNum.length; 
    infoUltimo=guardarNum.substr(cifras-1,cifras) 
    guardarNum=guardarNum.substr(0,cifras-1) 
    if (guardarNum=="") {guardarNum="0";} 
    if (infoUltimo==".") {punto=0;} 
    pantalla.innerHTML=guardarNum; 
}

function factorial(){ 
numIngresado = guardarNum;
acumulador = 1;
if(guardarNum == 0 || guardarNum < 0){
    pantalla.innerHTML ="0 no tiene factorial";
    pantallaBaja.innerHTML = "Factorial de "+ numIngresado + " = " + " no tiene factorial";
}else if(guardarNum ==1){
    pantalla.innerHTML = acumulador;
    pantallaBaja.innerHTML = "Factorial de " + numIngresado + " = " + acumulador;
}else if(guardarNum ==2){
    acumulador = 2;
    pantalla.innerHTML = acumulador;
    pantallaBaja.innerHTML = "Factorial de "+ numIngresado + " = " + acumulador;
}else{
    for(i=2;i<=guardarNum;i++){
        acumulador = acumulador * i;
        pantalla.innerHTML = acumulador;
        pantallaBaja.innerHTML = "Factorial de "+ numIngresado + " = " + acumulador;
    }
}

iniciarNum=1; 
operacionEnCurso = "no";

}

 function raizCuadrada(){
    guardado = guardarNum;
    guardarNum=Math.sqrt(guardado) 
    pantalla.innerHTML=guardarNum; 
    pantallaBaja.innerHTML = "Raíz Cuadrada de: " + guardado + " = "+ guardarNum; 
    operacionEnCurso="no"; 
    iniciarNum=1; 
   
 }

function primo(){
    var contador = 0;
    for(i=2;i<guardarNum;i++){
        if(guardarNum%i ==0){
            contador=contador+1;
        }
        if(contador==0){
            pantalla.innerHTML = " Es un Numero Primo";
            pantallaBaja.innerHTML = guardarNum + " Es un Numero Primo ";
        }else{
            pantalla.innerHTML = " No es un Numero Primo";
            pantallaBaja.innerHTML = guardarNum + " No es un Numero Primo ";
        }
    }if(guardarNum==1){
        pantalla.innerHTML = " No es un Numero Primo";
        pantallaBaja.innerHTML = guardarNum + " No es un numero primo";
    }if(guardarNum==2){
        pantalla.innerHTML = " Es un numero Primo";
        pantallaBaja.innerHTML = guardarNum + " Es un Numero primo ";
    }
    operacionEnCurso="no"; 
    iniciarNum=1; 
}

function seno(){
    
    guardarNum = Number(guardarNum);
    radianes = (Math.PI/180)*guardarNum;
    if(guardarNum<0 || guardarNum > 90 || isNaN(guardarNum)){
        pantalla.innerHTML = "No has escrito un número entre 0 y 90.";
        pantallaBaja.innerHTML = guardarNum + " <----- No has escrito un número entre 0 y 90. "
    }else{
        senoResult = Math.sin(radianes);
        pantalla.innerHTML = senoResult;
        pantallaBaja.innerHTML = " Seno de " + guardarNum + " = " + senoResult;
    }
    operacionEnCurso="no"; 
    iniciarNum=1; 
}

function cos(){
    guardarNum = Number(guardarNum);
    radianes = (Math.PI/180)*guardarNum;
    if(guardarNum<0 || guardarNum > 90 || isNaN(guardarNum)){
        pantalla.innerHTML = "No has escrito un número entre 0 y 90.";
        pantallaBaja.innerHTML = guardarNum + " <----- No has escrito un número entre 0 y 90. "
    }else{
        cosResult = Math.cos(radianes);
        pantalla.innerHTML = cosResult;
        pantallaBaja.innerHTML = " Coseno de " + guardarNum + " = " + cosResult;
    }
    operacionEnCurso="no"; 
    iniciarNum=1; 
}

function tangente(){
    guardarNum = Number(guardarNum);
    radianes = (Math.PI/180)*guardarNum;
    if(guardarNum<0 || guardarNum > 90 || isNaN(guardarNum)){
        pantalla.innerHTML = "No has escrito un número entre 0 y 90.";
        pantallaBaja.innerHTML = guardarNum + " <----- No has escrito un número entre 0 y 90. ";
    }else{
        tanResult = Math.tan(radianes);
        pantalla.innerHTML = tanResult;
        pantallaBaja.innerHTML = " Tangente de " + guardarNum + " = " + tanResult;
    }
    operacionEnCurso="no"; 
    iniciarNum=1; 
}

function logNatural(){
    lnResult=Math.log(guardarNum);
    pantalla.innerHTML = lnResult;
    pantallaBaja.innerHTML = "Logaritmo Neperiano de " + guardarNum + " = " + lnResult; 
    operacionEnCurso="no"; 
    iniciarNum=1; 
}

function par(){
    if(guardarNum % 2 == 0){
        pantalla.innerHTML = " Es PAR";
        pantallaBaja.innerHTML = guardarNum + " = "+" Par";
    }
    else{
        pantalla.innerHTML = " NO es PAR";
        pantallaBaja.innerHTML = guardarNum + " = "+" No Es Par";
    }
    iniciarNum=1;
}

function cuadrado(){
    cuadradoResult = guardarNum*guardarNum;
    pantalla.innerHTML = cuadradoResult;
    pantallaBaja.innerHTML = guardarNum + "^2 = " + cuadradoResult;
    iniciarNum=1;
}

function pi(){
    guardarNum = Math.PI;
    pantalla.innerHTML = guardarNum;
    pantallaBaja.innerHTML = "π = " + guardarNum;
}

function e(){
    guardarNum = Math.E;
    pantalla.innerHTML = guardarNum;
    pantallaBaja.innerHTML ="e = " + guardarNum;
}

function inverso(){

    var inversoResult = guardarNum.split("").reverse().join("");
    pantallaBaja.innerHTML = inversoResult;
    guardarNum = inversoResult;
}

function opuesto(){
    numeroConvertido=Number(guardarNum); 
    numeroConvertido=-numeroConvertido; 
    numeroCadena=String(numeroConvertido); 
    pantalla.innerHTML=numeroCadena; 
    pantallaBaja.innerHTML = numeroCadena;
    guardarNum = numeroCadena;
    iniciarNum = 1;
}

function factorialSum(){
    numIngresado = guardarNum;
    acumulador = 1;
    if(guardarNum == 0 || guardarNum < 0){
        pantalla.innerHTML ="0 no tiene factorial";
        pantallaBaja.innerHTML = "Factorial de suma "+ numIngresado + " = " + " no tiene factorial";
    }else if(guardarNum ==1){
        pantalla.innerHTML = acumulador;
        pantallaBaja.innerHTML = "Factorial de suma "+ numIngresado + " = " + acumulador;
    }else if(guardarNum == 2){
        acumulador = 3;
        pantalla.innerHTML = acumulador;
        pantallaBaja.innerHTML = "Factorial de suma "+ numIngresado + " = " + acumulador;
    }else{
        for(i=2;i<=guardarNum;i++){
            acumulador = acumulador + i;
            pantalla.innerHTML = acumulador;
            pantallaBaja.innerHTML = "Factorial de suma "+ numIngresado + " = " + acumulador;
        }
    }
    
    iniciarNum=1; 
}
