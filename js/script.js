/* AGREGAR DISCOS MÁS VENDIDOS */

let contenedorTarjetasDiscosMasVendidos = document.getElementById("contenedorDiscosMasVendidos");
contenedorTarjetasDiscosMasVendidos.classList.add('justify-content-around', 'p-3');
discosMasVendidos.forEach(disco => {
    const article = document.createElement("article");
    article.classList.add("card", "col-12", "col-sm-5", "col-md-5", "col-lg-3", "col-xl-3", "m-1", "mb-3");
    article.innerHTML = `
    <img src="${disco.img}" class="card-img-top mt-3" alt="...">
    <div class="card-body">
        <h5 class="card-title nombreDisco">${disco.nombreDisco}</h5>
        <p class="card-text banda">${disco.bandaArtista}</p>
        <p class="card-text precio">$${disco.precio}</p>
        <a class="btn btn-dark w-20 btnComprar" style="float: right">Comprar&nbsp; <i class="fas fa-cart-plus"></i></a>
    </div>
`
    contenedorTarjetasDiscosMasVendidos.append(article);
});

/* AGREGAR DISCOS ÚLTIMOS LANZAMIENTOS */

let contenedorTarjetasDiscosUltimosLanzamientos = document.getElementById("contenedorDiscosUltimosLanzamientos");
contenedorTarjetasDiscosUltimosLanzamientos.classList.add('justify-content-around', 'p-3');
discosUltimosLanzamientos.forEach(disco => {
    const article = document.createElement("article");
    article.classList.add("card", "col-12", "col-sm-5", "col-md-5", "col-lg-3", "col-xl-3", "m-1", "mb-3");
    article.innerHTML = `
    <img src="${disco.img}" class="card-img-top mt-3" alt="...">
    <div class="card-body">
        <h5 class="card-title nombreDisco">${disco.nombreDisco}</h5>
        <p class="card-text banda">${disco.bandaArtista}</p>
        <p class="card-text precio">$${disco.precio}</p>
        <a class="btn btn-dark w-20 btnComprar" style="float: right">Comprar &nbsp; <i class="fas fa-cart-plus"></i></a>
    </div>
`
    contenedorTarjetasDiscosUltimosLanzamientos.append(article);
});

/* AGREGAR DISCOS OFERTAS */

let contenedorTarjetasDiscosOfertas = document.getElementById("contenedorDiscosOfertas");
contenedorTarjetasDiscosOfertas.classList.add('justify-content-around', 'p-3');
discosOfertas.forEach(disco => {
    const article = document.createElement("article");
    article.classList.add("card", "col-12", "col-sm-5", "col-md-5", "col-lg-3", "col-xl-3", "m-1", "mb-3");
    article.innerHTML = `
    <img src="${disco.img}" class="card-img-top mt-3" alt="...">
    <div class="card-body">
        <h5 class="card-title nombreDisco">${disco.nombreDisco}</h5>
        <p class="card-text banda">${disco.bandaArtista}</p>
        <p class="card-text precio">$${disco.precio}</p>
        <a class="btn btn-dark w-20 btnComprar" style="float: right">Comprar &nbsp; <i class="fas fa-cart-plus"></i></a>
    </div>
`
    contenedorTarjetasDiscosOfertas.append(article);
});

/* AGREGAR DISCOS ENVIO GRATIS */

let contenedorTarjetasEnvioGratis = document.getElementById("contenedorDiscosEnvioGratis");
contenedorTarjetasEnvioGratis.classList.add('justify-content-around', 'p-3');
discosEnvioGratis.forEach(disco => {
    const article = document.createElement("article");
    article.classList.add("card", "col-12", "col-sm-5", "col-md-5", "col-lg-3", "col-xl-3", "m-1", "mb-3");
    article.innerHTML = `
    <img src="${disco.img}" class="card-img-top mt-3" alt="...">
    <div class="card-body">
        <h5 class="card-title nombreDisco">${disco.nombreDisco}</h5>
        <p class="card-text banda">${disco.bandaArtista}</p>
        <p class="card-text precio">$${disco.precio}</p>
        <a class="btn btn-dark w-20 btnComprar" style="float: right">Comprar &nbsp; <i class="fas fa-cart-plus"></i></a>
    </div>
`
    contenedorTarjetasEnvioGratis.append(article);

});

/* CARRITO DE COMPRAS */

let carrito = [];
let botonCarrito = document.querySelector("#botonCarrito");
let carritoIndex = document.querySelector("#carrito");
let contenedorProductosCarrito = document.querySelector("#contenedorProductos");

botonCarrito.addEventListener("click", () => {
    if (carritoIndex.classList.contains("animate__fadeOutRight")) {
        carritoIndex.classList.replace("animate__fadeOutRight", "animate__fadeInRight");
        botonCarrito.classList.add("colorCarritoActivado");
    } else {
        carritoIndex.classList.replace("animate__fadeInRight", "animate__fadeOutRight");
        botonCarrito.classList.remove("colorCarritoActivado");
    }
});


let arregloBtnComprar = document.querySelectorAll(".btnComprar");
for (let i = 0; i < arregloBtnComprar.length; i++) {
    arregloBtnComprar[i].addEventListener("click", (e) => {
        let contenedorDisco = e.target.parentElement;
        let nombre = contenedorDisco.querySelector(".nombreDisco").textContent;
        let disco = todosLosDiscos.filter(x => x.nombreDisco == nombre);
        let nombreDisco = disco[0].nombreDisco;

        /* VERIFICO SI EL DISCO ESTÁ CARGADO AL CARRO YA, CON some() */
        if (disco[0].stock == 0) {
            console.error("NO HAY STOCK SUFICIENTE DE " + nombreDisco.toUpperCase());
            arregloBtnComprar[i].textContent = "No Disponible"
            arregloBtnComprar[i].classList.replace("btn-dark", "btn-danger")
        } else if (carrito.some(x => x.nombreDisco == nombre)) {
            let id = disco[0].id;
            let selector = ".cantidadDiscos" + id;
            let selectorIcono = ".iconoRestarCarrito" + id;
            document.querySelector(selectorIcono).classList.replace("fa-trash", "fa-minus");
            let maximo = disco[0].stock;
            if ((parseFloat(document.querySelector(selector).textContent)) + 1 <= maximo) {
                document.querySelector(selector).textContent = (parseFloat(document.querySelector(selector).textContent)) + 1;
                carrito.forEach(x => {
                    if (x.id == disco[0].id) {
                        x.stock = x.stock + 1;
                    }
                });
            }
        } else {
            let precio = disco[0].precio;
            let img = disco[0].img;
            let id = disco[0].id;
            let clon = Object.assign({}, disco[0]);
            clon.stock = 1;
            carrito.push(clon);
            let index = carrito.map(e => e.nombreDisco).indexOf(nombreDisco);
            let producto = document.createElement("div");
            producto.innerHTML =
                `
                        <div class="container-fluid contenedorDiscoCarritoIndex contenedorCarrito${id}">
                            <div class="row row-cols-2 ">
                                <div class="col-2">
                                    <img src="${img}">
                                </div>
                                <div class="col-6 text-center">
                                    <p>${nombreDisco}</p>
                                    <p clase="precioCarritoIndex"><strong>$${precio}</strong></p>
                                </div>
                                <div class="col-4">
                                    <div class="container-fluid contenedorBotonesCarrito borderCarrito">
                                        <div class="row row-cols-1">
                                            <div class="col-4">
                                                <span id="${id}"></span>
                                                <i class="fas fa-trash iconoRestarCarrito${id} iconoRestar"></i>
                                            </div>
                                            <div class="col-4">
                                                <p class="cantidadDiscos${id}" style="text-align: center">1</p>
                                            </div>
                                            <div class="col-4">
                                                <span id="${nombre}"></span>
                                                <i class="fas fa-plus iconoSumarCarrito${id}"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>            
                    `
            contenedorProductosCarrito.append(producto);

            let selectorIcono = ".iconoRestarCarrito" + id;
            let selectorSumar = ".iconoSumarCarrito" + id;
            let selectorRestar = ".iconoRestarCarrito" + id;
            let selectorParrafo = ".cantidadDiscos" + id;
            let selectorABorrar = ".contenedorCarrito" + id;

            /* ICONO SUMAR EN CARRITO */

            document.querySelector(selectorSumar).addEventListener("click", () => {
                if ((carrito[index].stock + 1) <= disco[0].stock) {
                    document.querySelector(selectorParrafo).textContent = (parseFloat(document.querySelector(selectorParrafo).textContent)) + 1;
                    document.querySelector(selectorRestar).classList.replace("fa-trash", "fa-minus");
                    carrito[index].stock = carrito[index].stock + 1
                    precioTotal();
                    actualizarContadorCarrito();
                }
            });

            /* ICONO RESTAR EN CARRITO */

            document.querySelector(selectorRestar).addEventListener("click", () => {
                index = carrito.map(e => e.nombreDisco).indexOf(nombreDisco);
                if (carrito[index].stock == 1) {
                    let selectorABorrar = ".contenedorCarrito" + id;
                    document.querySelector(selectorABorrar).remove();
                    carrito.splice(index, 1);
                } else if (carrito[index].stock == 2) {
                    document.querySelector(selectorRestar).classList.replace("fa-minus", "fa-trash");
                    document.querySelector(selectorParrafo).textContent = (parseFloat(document.querySelector(selectorParrafo).textContent)) - 1;
                    carrito[index].stock = carrito[index].stock - 1;

                } else {
                    document.querySelector(selectorParrafo).textContent = (parseFloat(document.querySelector(selectorParrafo).textContent)) - 1;
                    carrito[index].stock = carrito[index].stock - 1;
                }
                precioTotal();
                actualizarContadorCarrito();
            });
        }
        precioTotal();
        actualizarContadorCarrito();
    });
};

/* VACIAR CARRITO */

document.querySelector(".vaciarCarro").addEventListener("click", () => {
    carrito = [];
    document.querySelector("#contadorProductosCarrito").textContent = carrito.length;
    document.querySelector("#subtotal").textContent = 0;
    let hijosCarrito = contenedorProductosCarrito.childNodes
    while (hijosCarrito.length != 0) {
        hijosCarrito[0].remove();
    }
});

/* FUNCIONES PARA EL CARRITO */

let precioTotal = () => {
    let totalPrice = 0;
    carrito.forEach(element => {
        totalPrice += element.precio * element.stock;
    });
    document.querySelector("#subtotal").textContent = totalPrice;
};

let actualizarContadorCarrito = () => {
    document.querySelector("#contadorProductosCarrito").textContent = carrito.length;
};

/* PAGAR */

document.querySelector("#precioTotalCarritoIndex").addEventListener("click", () => {
    let cantidadCompra = 0
    for (let i = 0; i < carrito.length; i++) {
        cantidadCompra += carrito[i].stock
    }

    if (cantidadCompra == 0) {
        document.querySelector(".modal-header").innerHTML =
            `
            <h5>Carrito Vacío<i class="fas fa-times-circle" style="margin-left: 4px;"></i></h5>
        `
        document.querySelector(".productosConfirmarCompra").innerHTML =
            `
            <p>TU CARRITO SE ENCUENTRA VACÍO <i class="far fa-frown-open" style="margin-left: 1px"></i></p>
        `
    } else if (cantidadCompra == 1) {
        document.querySelector(".modal-header").innerHTML =
            `
            <h5>Compra Realizada<i class="fas fa-check" style="margin-left: 4px;"></i></h5>
        `
        document.querySelector(".productosConfirmarCompra").innerHTML =
            `
            <p>GRACIAS POR COMPRAR ${cantidadCompra} DISCO EN <strong>VINILOS FANKY</strong></p>
        `
        /* REDUCIR STOCK */

        carrito.forEach(disco => {
            let discoStock = todosLosDiscos.filter(x => x.nombreDisco == disco.nombreDisco);
            let numeroARestar = parseFloat(disco.stock);
            discoStock[0].comprar(numeroARestar);
        });

        /* REDUCIR STOCK */

        carrito = []
        document.querySelector("#contadorProductosCarrito").textContent = carrito.length;
        document.querySelector("#subtotal").textContent = 0;
        let hijosCarrito = contenedorProductosCarrito.childNodes
        while (hijosCarrito.length != 0) {
            hijosCarrito[0].remove();
        }
    } else {
        document.querySelector(".modal-header").innerHTML =
            `
            <h5>Compra Realizada<i class="fas fa-check" style="margin-left: 4px;"></i></h5>
        `
        document.querySelector(".productosConfirmarCompra").innerHTML =
            `
            <p>GRACIAS POR COMPRAR ${cantidadCompra} DISCOS EN <strong>VINILOS FANKY</strong></p>
        `

        /* REDUCIR STOCK */

        carrito.forEach(disco => {
            let discoStock = todosLosDiscos.filter(x => x.nombreDisco == disco.nombreDisco);
            let numeroARestar = parseFloat(disco.stock);
            discoStock[0].comprar(numeroARestar);
        });

        /* REDUCIR STOCK */

        carrito = []
        document.querySelector("#contadorProductosCarrito").textContent = carrito.length;
        document.querySelector("#subtotal").textContent = 0;
        let hijosCarrito = contenedorProductosCarrito.childNodes
        while (hijosCarrito.length != 0) {
            hijosCarrito[0].remove();
        }
    }
});

let arrImgCategoria = document.querySelectorAll(".imgCategoria");
for (let i = 0; i < arrImgCategoria.length; i++) {
    arrImgCategoria[i].addEventListener("click", (e) => {
        let padre = e.target.parentElement;
        let categoria = padre.querySelector("h6").textContent;
        let discosCategoria = todosLosDiscos.filter(x => x.genero == categoria);
        let hijosCategorias = document.querySelector("#discosFiltradosPorCategoria").childNodes;
        let arrHijosCategorias = Array.apply(null, hijosCategorias);
        for (let i = 0; i < arrHijosCategorias.length; i++) {
            arrHijosCategorias[i].remove();
        }
        for (const disco of discosCategoria) {
            let article = document.createElement("article");
            article.classList.add("card", "col-12", "col-sm-5", "col-md-5", "col-lg-3", "col-xl-3", "m-1", "mb-3");
            article.innerHTML =
                `
                <img src="${disco.img}" class="card-img-top mt-3" alt="...">
                <div class="card-body">
                    <h5 class="card-title nombreDisco">${disco.nombreDisco}</h5>
                    <p class="card-text banda">${disco.bandaArtista}</p>
                    <p class="card-text precio">$${disco.precio}</p>
                    <a class="btn btn-dark w-20 btnComprar" style="float: right">Comprar &nbsp; <i class="fas fa-cart-plus"></i></a>
                </div>
            `
            document.querySelector("#discosFiltradosPorCategoria").append(article);
            document.querySelector("#discosFiltradosPorCategoria").classList.add('justify-content-around', 'p-3');
        }
    });
};



/* MODO OSCURO */

/* let botonModoOscuro = document.querySelector("#modoOscuro");
botonModoOscuro.addEventListener("click", modoOscuro);

function modoOscuro() {
    document.querySelector("nav").classList.toggle("navbar-dark");
    document.querySelector("nav").classList.toggle("bg-dark");
    document.querySelector("#solLuna").classList.toggle("fa-sun");
    document.querySelector("body").classList.toggle("bg-dark");
    document.querySelector("#anchor").classList.toggle("anchorToggle");
    let textosExh = document.querySelectorAll(".textoExhibidor");
    for (let i = 0; i < textosExh.length; i++) {
        textosExh[i].classList.toggle("textoExhibidorBlanco");
    }
}
 */