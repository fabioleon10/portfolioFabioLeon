let menuVisible = false;
//Ocultar / Mostrar Menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //Oculta menu ao selecionar uma opção
    document.getElementById("nav").classList = "";
    menuVisible = false;
}