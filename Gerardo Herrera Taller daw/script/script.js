function resultado(){
    const Precio = 59.99;
    var nombre, Subtotal, Iva, total, totalv2; 
    nombre = document.getElementById("nombre").value; 
    totalv2 = document.getElementById("total").value; 
    
   
 

    Subtotal = Precio * totalv2; 
    Iva = Subtotal * 0.13; 
    total = Subtotal + Iva;
   
  
    total = total.toFixed(2);


    if (nombre !=0 && totalv2 <= 0 ) {
        alert('¡Nombre o precio no válidos!');
    }
    else{
        if (totalv2 <=20 && totalv2 !=0){
            var descuento ,descuento2, totalv3;
            var mindesc1=80 , maxdesc1=100;
            descuento = Math.random( (maxdesc1 - mindesc1) + mindesc1).toFixed(2);
            descuento2=descuento*totalv2
           totalv3=totalv2-descuento2
            document.getElementById("final")
            document.getElementById("final") 
            document.getElementById("final") 
            document.getElementById("final").innerHTML="<p id='title'>Recibo: </p><p>Su nombre es: " + nombre  
            + "<br>Su descuento es de: " + descuento +"%</p>"
            + "<br>Su total es de: $" + totalv3 +"</p>"
            
        }
        else{
            if (nombre !=0 && totalv2 >= 1 ){
            document.getElementById("final").style.height = "fit-content"; 
            document.getElementById("final").style.padding = "20px 0 70px 20px"; 
            document.getElementById("final").style.border = "1px solid blue"; 
            document.getElementById("final").innerHTML="<p id='title'>Recibo: </p><p>Su nombre es: " + nombre  
            + "<br>Su total es: $" + total +"</p>"
            }   
        }
    }
    
}