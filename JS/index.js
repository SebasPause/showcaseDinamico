localStorage.setItem('cantidadNrFrutas',0);

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

    if (cantidadAnadida=='0' || cantidadAnadida=='') {
        alert("Introduce una cantidad mayor a 0");
        return;
    }

    var objeto = document.createElement('div');
    var nrFrutas = parseInt(localStorage.getItem('cantidadNrFrutas')) +1;
    localStorage.setItem('cantidadNrFrutas',nrFrutas);
    objeto.setAttribute('id','divFruta'+nrFrutas);
    document.getElementById('frutasCesta').appendChild(objeto);
    document.getElementById('frutasCesta').style.width = '100%';
    var divObjeto = document.getElementById('divFruta'+nrFrutas);
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

