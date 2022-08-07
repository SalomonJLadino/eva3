$('.toggle').click(function(){
    $('.formulario').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toggle'
    }, "slow");
});
 
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const usuario = document.getElementById("usuario")
const correo = document.getElementById("correo")
const contraseña = document.getElementById("contraseña")
const edad = document.getElementById("edad")
const telefono = document.getElementById("telefono")
const direccion = document.getElementById("direccion")
const formulario = document.getElementById("formulario")
const parrafo = document.getElementById("warnings")

formulario.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexcorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let regexusuario = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(nombre.Value.length <6){
        warnings += 'El nombre no es valido <br>'
        entrar = true
    }
    console.log(regexcorreo.test(correo.value))
    if(!regexcorreo.test(correo.value)){
        warnings += 'El Email no es valido <br>'
        entrar = true
    }
    if(contraseña.value.length <8){
        warnings += 'La contraseña no es valida <br>'
        entrar = true
    }
    console.log(regexusuario.test(usuario.value))
    if(!regexusuario.test(usuario.value)){
        warnings += 'El usuario no es valido <br>'
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }
})