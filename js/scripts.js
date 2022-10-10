var DNI_REGEX=/^(\d{8})([A-Z])$/
var IBAN_REGEX=/([a-zA-Z]{2})\s*\t*(\d{2})\s*\t*(\d{4})\s*\t*(\d{4})\s*\t*(\d{2})\s*\t*(\d{10})$/
var EMAIL_REGEX=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/
var TLF_REGEX=/(6)[ -]*([0-9][ -]*){8}$/

function Limpiar() {
    document.getElementById("registro").reset();
  }

function validaFormulario() {
    let email=document.forms["formulario_epic"]["Correo"].value;
    let telefono=document.forms["formulario_epic"]["Telefono"].value;
    let dni = document.forms["formulario_epic"]["DNI"].value;
    let iban=document.forms["formulario_epic"]["IBAN"].value;
   
   
    
    if (!email.match(EMAIL_REGEX)){       
         alert("El correo es incorrecto");
        return false;  
    }else{
      if(!telefono.match(TLF_REGEX)){       
         alert("El correo o el telefono son incorrectos.");
        return false
        }else{
            if(!dni.match(DNI_REGEX)){            
                alert("El correo, telefono o DNI son incorrectos.");
                return false; 
            }else{
                if(!iban.match(IBAN_REGEX)){
                    alert ("El correo, telefono,DNI o IBAN son incorrectos");
                return false;                
                }else{
                    alert ("Registro realizado con exito.");
                    Limpiar();
                    return false;

                    }
        

                }
      

              }
  

         }
  }

