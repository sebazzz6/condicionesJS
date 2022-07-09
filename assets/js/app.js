//project variables
let img = document.querySelector("#imgBorder");
let btnChangeBorder = document.querySelector("#changeBorder");
let btnQuantityCheck = document.querySelector("#checkQuantity");
let messageVerified = document.querySelector("#messageVerified");
let messageError1 = document.querySelector("#messageError1");
let messageError2 = document.querySelector("#messageError2");
let messageError3 = document.querySelector("#messageError3");
let passNum1 = document.querySelector("#num1");
let passNum2 = document.querySelector("#num2");
let passNum3 = document.querySelector("#num3");
let btnValidator = document.querySelector("#checkPass");
let msgValidator = document.querySelector("#msgValidator");
let flagBtnChangeColor = 0;

//project code to place border to image
if(document.body.contains(btnChangeBorder)){
    btnChangeBorder.addEventListener("click", function(){
        console.log("Click para cambiar borde");
        if(flagBtnChangeColor == 0){
            img.setAttribute("style", "border:2px solid red");
            btnChangeBorder.innerHTML = "Quitar Borde a imagen";
            btnChangeBorder.setAttribute("style", "background-color: #dc3545;");
            flagBtnChangeColor = 1;
        }else{
            img.style.removeProperty("border");
            btnChangeBorder.innerHTML = "Colocar Borde a Imagen";
            btnChangeBorder.setAttribute("style", "background-color: #007bff");
            flagBtnChangeColor = 0;
        }
    });
}


//Verified quantity of ticket
if(document.body.contains(btnQuantityCheck)){
    btnQuantityCheck.addEventListener("click", function(){
        console.log("Check Cantidad");
        messageError1.innerHTML = "";
        messageError2.innerHTML = "";
        messageError3.innerHTML = "";
        let quantity1 = document.querySelector("#quantityTicket1").value;
        let quantity2 = document.querySelector("#quantityTicket2").value;
        let quantity3 = document.querySelector("#quantityTicket3").value;
        let TotalQuantity = Number(quantity1) + Number(quantity2)+ Number(quantity3);
      
        if (isNaN(quantity1) || isNaN(quantity2) || isNaN(quantity3)) {
            if(isNaN(quantity1)){
                messageError1.innerHTML = "Cantidad solo deben ser Números";
                messageError1.style.color = "red";
            }
            else if(isNaN(quantity2)){
                messageError2.innerHTML = "Cantidad solo deben ser Números";
                messageError2.style.color = "red";
            }
            else if(isNaN(quantity3)){
                messageError3.innerHTML = "Cantidad solo deben ser Números";
                messageError3.style.color = "red";
            }
        } 
      
        else if (TotalQuantity == 0) {
            messageVerified.innerHTML = "No se ha ingresado una cantidad en algun campo. Favor ingresar cantidades";
            messageVerified.style.color = "red";
        } 
        else if (TotalQuantity <= 10) {
            messageVerified.innerHTML = `Cantidad de Tickets solicitados: ${TotalQuantity}`;
            messageVerified.style.color = "green";
          } 
      
        else {
            messageVerified.innerHTML = `Llevas ${TotalQuantity} Solictados y excede la cantidad Máxima permitida (Máx. 10)`;
            messageVerified.style.color = "red";
        }
    });
}

//Code Password function
if(document.body.contains(btnValidator)){
    btnValidator.addEventListener("click", function(){
        let passInsert = Number(passNum1.value + passNum2.value + passNum3.value);
        if (passInsert === 911) {
            msgValidator.innerHTML = "¡Password 1 Correcta!";
            msgValidator.style.color = "green";
        } else if (passInsert === 714) {
            msgValidator.innerHTML = "¡Password 2 Correcta!";
            msgValidator.style.color = "green";
        } else {
            msgValidator.innerHTML = "¡Password Incorrecta!";
            msgValidator.style.color = "red";
        }
    });
}


    
 