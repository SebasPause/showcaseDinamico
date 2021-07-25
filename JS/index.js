const contenedor = document.getElementById('contenedor');

contenedor.addEventListener('click', () => {
    document.getElementById('divCantidad').style.visibility = "hidden";
})

const fruta = document.querySelector('#fruta');

const cesta = document.querySelector('#cesta');

cesta.addEventListener('click',() => {
    document.getElementById('contenidoCesta').style.visibility = 'visible';
})

const ocultarCesta = () => {
    document.getElementById('contenidoCesta').style.visibility = 'hidden';
}


cesta.addEventListener('dragover', e=>{
    e.preventDefault();
})


const drag = (ev) => {
    ev.dataTransfer.setData('Text/html',ev.target.id);
}

const drop = (ev, target) =>{
    ev.preventDefault();

    var data  = ev.dataTransfer.getData('Text/html');
    document.getElementById('divCantidad').style.visibility = "visible";
    localStorage.setItem('fruta',data);
}

const anadirFruta = () => {
    document.getElementById('divCantidad').style.visibility = "hidden";
    var cantidadAnadida = document.getElementById('cantidad').value;
    var objeto = document.createElement('div');
    objeto.setAttribute('id','divFruta');
    document.getElementById('frutasCesta').appendChild(objeto);
    var divObjeto = document.getElementById('divFruta');
    divObjeto.style.width = '100%';
    var divFruta = document.getElementById(localStorage.getItem('fruta'));
    divFruta.style.position = 'relative';
    divFruta.style.margin = 'auto';
    divFruta.style.left = '0%';
    divObjeto.appendChild(divFruta);
    var textoCantidad = document.createElement('p');
    textoCantidad.setAttribute('id',localStorage.getItem('fruta')+"1");
    textoCantidad.innerHTML = cantidadAnadida;
    divObjeto.appendChild(textoCantidad);

}

