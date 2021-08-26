//Ejecutar funcionen el evento click
document.getElementById("btn_open").addEventListener("click", open_cclose_menu);
//Declaramos variables
var  side_menu = document.getElementById("side_menu");
var  btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");

//Evento para mostrar y ocultar menú
    funcion; open_close_menu;{
        body.classList.toggle("body_move");
        side_menu_classList.toggle("menu__side_move");
     }


//Si el ancho de la pagina es menor a 700px, ocultará el menúal recargar la pagina      

if (window.innerWidth < 760){

    body.classList.add("body_move")
    side_menu.classList.add("menu__side_move")
}

//Hacienndo el menú responsive(adaptable)

window.addEventListener("resize", function(){
    
    if (window.innerWidth > 760){

        body.classList.remove("body_move")
        side_menu.classList.remove("menu__side_move")
    }

    if (window.innerWidth < 760){

        body.classList.add("body_move");
        side_menu.classList.add("menu__side_move");
    }
});