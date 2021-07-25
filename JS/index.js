const contenedor = document.getElementById('contenedor');

contenedor.addEventListener('click', () => {
    document.getElementById('divCantidad').style.visibility = "hidden";
})

const fruta = document.querySelector('#fruta');

/*fruta.addEventListener('dragstart', e => {
    console.log('Drag  start');
})*/

fruta.addEventListener('dragend', e => {
    console.log('Drag  end');
})

fruta.addEventListener('drag', e => {
    console.log('Drag');
})

const cesta = document.querySelector('#cesta');

cesta.addEventListener('click',() => {
    document.getElementById('contenidoCesta').style.visibility = 'visible';
})

const ocultarCesta = () => {
    document.getElementById('contenidoCesta').style.visibility = 'hidden';
}

const drag = (ev) => {
    ev.dataTransfer.setData('Text/html',ev.target.id);
}

const drop = (ev, target) =>{
    ev.preventDefault();
    console.log(target.id,ev.target.id);

    var data  = ev.dataTransfer.getData('Text/html');
    document.getElementById('divCantidad').style.visibility = "visible";
}

const anadirFruta = () => {
    document.getElementById('divCantidad').style.visibility = "hidden";
    var cantidadAnadida = document.getElementById('cantidad').value;
}

