

let codop;
let dirMemoria;
let operando1;
let operando2;
let resultadoOp;

    function limpiar(etiqueta){
        let instruccion = document.getElementById(etiqueta);

        instruccion.textContent = ""

    }

    function iniciar() {
        let instruccion = document.getElementById('input-intruccion');

      extraerDatos(instruccion.value);
      cambiarIr();
      setTimeout(cambiarMar,3000);
      setTimeout(cambiarMbrOp1,3000);
      setTimeout(cambiarAlu,6000);
      setTimeout(cambiarAc,9000);
      setTimeout(cambiarMbrOp2,12000);
      setTimeout(cambiarAluOp2,15000);
      resultadoOp = operar(operando1, operando2);
      setTimeout(cambiarRegistroResultados, 18000);

    }

    function extraerDatos(binary){
        let arrayBinary = Array.from(binary);

        codop = arrayBinary.slice(0,2);
        codop = codop.toString();
        codop = codop.replaceAll(',','');
        dirMemoria = arrayBinary.slice(2,6);
        dirMemoria = dirMemoria.toString();
        dirMemoria = dirMemoria.replaceAll(',','');
        operando1 = arrayBinary.slice(6,10);
        operando1 = operando1.toString();
        operando1 = operando1.replaceAll(',','');
        operando2 = arrayBinary.slice(10,14);
        operando2 = operando2.toString();
        operando2 = operando2.replaceAll(',','');
    }

  

    function cambiarIr() {
        let irText = document.getElementById('ir-text');
  
        irText.textContent = dirMemoria;
      } 

      
    function cambiarMar(){
        let marText = document.getElementById('mar-text');

        limpiar('ir-text');
        marText.textContent = dirMemoria;
    }

    function cambiarMbrOp1(){
        let mbrText = document.getElementById('mbr-text');
        mbrText.textContent = operando1;
    }

    function cambiarMbrOp2(){
        let mbrText = document.getElementById('mbr-text');
        mbrText.textContent = operando2;
    }

    function cambiarAlu(){
        let aluText = document.getElementById('alu-text');

        limpiar('mbr-text');
        aluText.textContent = operando1;
    }

    function cambiarAluOp2(){
        let aluText = document.getElementById('alu-text');

        limpiar('mbr-text');
        aluText.textContent = operando2;
    }

    function cambiarAc(){
        let acText = document.getElementById('ac-text');

        limpiar('alu-text');
        acText.textContent = operando1;
    }


    function operar(op1, op2){
       let operando1 = BinarioADecimal(op1);
       let operando2 = BinarioADecimal(op2);
       let resultado;

       switch (codop) {
        case '00':
            resultado = operando1 + operando2;
            break;
        case '01':
            resultado = operando1 - operando2;
            break;
        case '10':
            resultado = operando1 / operando2;
            break;
        case '11':
            resultado = operando1 * operando2;
            break;
       
        default:
            break;
       }

       return resultado;

    }

    function BinarioADecimal(num) {
        let sum = 0;
    
        for (let i = 0; i < num.length; i++) {
           sum += +num[i] * 2 ** (num.length - 1 - i);
        }
        return sum;
    }

    function cambiarRegistroResultados() {
        let direccionMemoria = BinarioADecimal(dirMemoria);

        let regMemoria = document.getElementById(direccionMemoria);
        regMemoria.textContent = resultadoOp;


    }