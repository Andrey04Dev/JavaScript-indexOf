//Variables
const productos =[
    {nombre:'Platanos', valor:500},
    {nombre:'Pera', valor:500},
    {nombre:'Tomate', valor:500},
    {nombre:'Zanahoria', valor:500},
    {nombre:'Papa', valor:500},
];
const formulario = document.querySelector('#formulario');
const button = document.querySelector('#boton');
const resultado = document.querySelector('#resultado');

const filtrar  = () =>{
    // console.log(formulario.value);
    resultado.innerHTML='';
    const texto = formulario.value.toLowerCase();
    for (const item of productos) {
        let nombre = item.nombre.toLowerCase();
        if (nombre.indexOf(texto) !== -1) { //con el indexof buscamos dentro el array un elemento que sea igual a que escribe el usuario
            // Si devuelve -1 no se encunetra.
            resultado.innerHTML += `<li>${item.nombre} - Valor:${item.valor}</li>`;
        }
    }

    if (resultado.innerHTML === '') {
        resultado.innerHTML += `<li> Producto no encontrado... </li>`;
    }
};

button.addEventListener('click',filtrar);
formulario.addEventListener('keyup',filtrar);
filtrar();