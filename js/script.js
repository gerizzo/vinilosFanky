/* AGREGAR DISCOS MÁS VENDIDOS */

let contenedorTarjetasDiscosMasVendidos = document.getElementById("contenedorDiscosMasVendidos");
contenedorTarjetasDiscosMasVendidos.classList.add('justify-content-around', 'p-3');
discosMasVendidos.forEach(disco => {
    const article = document.createElement("article");
    article.classList.add("card", "col-12", "col-sm-5", "col-md-5", "col-lg-3", "col-xl-3", "m-1", "mb-3", "animate__animated", "animate__fadeIn");
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
    article.classList.add("card", "col-12", "col-sm-5", "col-md-5", "col-lg-3", "col-xl-3", "m-1", "mb-3", "animate__animated", "animate__fadeIn");
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
    article.classList.add("card", "col-12", "col-sm-5", "col-md-5", "col-lg-3", "col-xl-3", "m-1", "mb-3", "animate__animated", "animate__fadeIn");
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
    article.classList.add("card", "col-12", "col-sm-5", "col-md-5", "col-lg-3", "col-xl-3", "m-1", "mb-3", "animate__animated", "animate__fadeIn");
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

/* BOTONES COMPRAR  */

let arregloBtnComprar = document.querySelectorAll(".btnComprar");
let arregloBtnComprar2 = document.querySelectorAll(".btnComprar2")
capturarBotones();
capturarBotones2();

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
            article.classList.add("card", "col-12", "col-sm-5", "col-md-5", "col-lg-3", "col-xl-3", "m-1", "mb-3", "animate__animated", "animate__fadeIn");
            article.innerHTML =
                `
                <img src="${disco.img}" class="card-img-top mt-3" alt="...">
                <div class="card-body">
                    <h5 class="card-title nombreDisco">${disco.nombreDisco}</h5>
                    <p class="card-text banda">${disco.bandaArtista}</p>
                    <p class="card-text precio">$${disco.precio}</p>
                    <a class="btn btn-dark w-20 btnComprar2" style="float: right">Comprar &nbsp; <i class="fas fa-cart-plus"></i></a>
                </div>
            `
            document.querySelector("#discosFiltradosPorCategoria").append(article);
            document.querySelector("#discosFiltradosPorCategoria").classList.add('justify-content-around', 'p-3');
        }
        capturarBotones2()
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

/* PAGAR */

document.querySelector("#precioTotalCarritoIndex").addEventListener("click", () => {
    let cantidadCompra = 0
    for (let i = 0; i < carrito.length; i++) {
        cantidadCompra = cantidadCompra + carrito[i].stock
    }
    if (cantidadCompra == 0) {

        document.querySelector(".modal-header").innerHTML =
            `
                    <h5 class"mensajeCarritoVacio">Carrito Vacío<i class="fas fa-times-circle" style="margin-left: 4px;"></i></h5>
                    <button type="button" style="float: right" class="btn-close" data-bs-dismiss="modal"></button>
            `
        document.querySelector(".productosConfirmarCompra").innerHTML =
            `
                    <h3 class"mensajeCarritoVacio"><strong>TU CARRITO SE ENCUENTRA VACÍO <i class="far fa-frown-open" style="margin-left: 1px"></i></strong></h3>
            `
    } else {
        if (localStorage.getItem("mailUsuario")) {
            let datosUsuario = {
                nombreUsuario: localStorage.getItem("nombreUsuario").toUpperCase(),
                apellidoUsuario: localStorage.getItem("apellidoUsuario").toUpperCase(),
                mailUsuario: localStorage.getItem("mailUsuario"),
                telefonoUsuario: localStorage.getItem("telefonoUsuario"),
            }

            document.querySelector(".modal-header").innerHTML =
                `
                    <h5>CHECKOUT <i class="fas fa-cash-register" style="margin-left: 4px;"></i></h5>
                    <button type="button" style="float: right" class="btn-close" data-bs-dismiss="modal"></button>
                 `
            document.querySelector(".modal-body").innerHTML =
                `
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <h3><strong>¿ERES ${datosUsuario.nombreUsuario} ${datosUsuario.apellidoUsuario}?</strong></h3>
                                <br>
                                <button type="button" class="btn btn-success identidadConfirmada" style="width: 4%">Si</button>
                                <button type="button" class="btn btn-danger identidadDesconocida" style="width: 4%">No</button>
                                <div class="cargando"><span></span></div>
                            </div>
                        </div>
                    </div>
                 `
            document.querySelector(".identidadDesconocida").addEventListener("click", () => {
                localStorage.removeItem("nombreUsuario");
                localStorage.removeItem("apellidoUsuario");
                localStorage.removeItem("mailUsuario");
                localStorage.removeItem("telefonoUsuario");
                let datosUsuario = {
                    nombreUsuario: undefined,
                    apellidoUsuario: undefined,
                    mailUsuario: undefined,
                    telefonoUsuario: undefined,
                }

                document.querySelector(".modal-header").innerHTML =
                    `
                        <h5>CHECKOUT <i class="fas fa-cash-register" style="margin-left: 4px;"></i></h5>
                        <button type="button" style="float: right" class="btn-close" data-bs-dismiss="modal"></button>
                         `

                document.querySelector(".modal-body").innerHTML = `
                            <form id="formularioIndex">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="mb-3">
                                                <label for="name" class="form-label">Nombre </label>
                                                <input type="text" required name="nombre" id="name" class="form-control">
                                            </div>
                                            <div class="mb-3">
                                                <label for="surname" class="form-label">Apellido </label>
                                                <input type="text" required name="apellido" id="surname" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="mb-3">
                                                <label for="mail" class="form-label">Email </label>
                                                <input type="email" required name="email" id="mail" class="form-control">
                                            </div>
                                            <div class="mb-3">
                                                <label for="phone" class="form-label">Teléfono </label>
                                                <input type="tel" required name="phone" id="phone" class="form-control">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-1">
                                            <span></span>
                                        </div>
                                        <div class="col-10">
                                            <label for="metodoPago" class="form-label"><i class="fa fa-money-check" style="margin-right: 5px"></i>Método de Pago</label>
                                            <br>
                                            <input type="radio" name="metodoPago" value="tarjeta" style="margin-right: 5px" required>Tarjeta de Crédito/Débito
                                            <br>
                                            <input type="radio" name="metodoPago" value="transferencia" style="margin-right: 5px" required>Transferencia Bancaria &nbsp;  &nbsp;
                                        </div>
        
                                        <div class="col-1">
                                            <span></span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="mt-3 col-12 cargando">
                                            <h4>Total $ ${precioTotal()} </h4>
                                            <button type="submit" class="btn btn-outline-success mt-2" id="btnSubmit">PAGAR</button>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="mt-3 col-12 contenedorErrorFormulario">
                                            
                                        </div>
                                    </div>
                                </div>
                            </form>
                                `

                let btnSubmit = document.querySelector("#btnSubmit");
                btnSubmit.addEventListener("click", (event) => {
                    event.preventDefault()
                    datosUsuario.nombreUsuario = document.querySelector("#name").value.toUpperCase();
                    datosUsuario.apellidoUsuario = document.querySelector("#surname").value.toUpperCase();
                    datosUsuario.mailUsuario = document.querySelector("#mail").value;
                    datosUsuario.telefonoUsuario = document.querySelector("#phone").value;
                    if (datosUsuario.nombreUsuario.length >= 2 && datosUsuario.apellidoUsuario.length >= 2 && datosUsuario.mailUsuario.includes("@") && datosUsuario.mailUsuario.length > 4 && datosUsuario.telefonoUsuario.length >= 7) {
                        if (document.querySelector("#parrafoError") != undefined) {
                            document.querySelector("#parrafoError").remove()
                        }
                        localStorage.setItem("nombreUsuario", datosUsuario.nombreUsuario);
                        localStorage.setItem("apellidoUsuario", datosUsuario.apellidoUsuario);
                        localStorage.setItem("mailUsuario", datosUsuario.mailUsuario);
                        localStorage.setItem("telefonoUsuario", datosUsuario.telefonoUsuario);
                        document.querySelector(".cargando").innerHTML = `
                            <br>
                            <br>
                            <img src="img/cargando.gif" alt="cargando" style="width: 50px; height: 50px" >
                        `
                        setTimeout(function () {
                            document.querySelector(".modal-header").innerHTML =
                                `
                            <h5>Compra Realizada<i class="fa fa-check" style="margin-left: 4px;"></i></h5>
                            <button type="button" style="float: right" class="btn-close" data-bs-dismiss="modal"></button>
                        `
                            document.querySelector(".modal-body").innerHTML =
                                `
                            <h3>¡GRACIAS ${datosUsuario.nombreUsuario} POR TU COMPRA!</h3>
                            <br>
                            <h4>Te hemos enviado tu factura electrónica a ${datosUsuario.mailUsuario}</h4>
                            <br>
                            <br>
                            <button type="button" class="btn btn-success" data-bs-dismiss="modal">Aceptar<i
                            class="fas fa-hand-spock" style="margin-left: 4px;"></i></button>
                        `
                            /* COMPRAR Y REDUCIR STOCK */

                            carrito.forEach(disco => {
                                let discoStock = todosLosDiscos.filter(x => x.nombreDisco == disco.nombreDisco);
                                let numeroARestar = parseFloat(disco.stock);
                                discoStock[0].comprar(numeroARestar);
                            })

                            /* REDUCIR STOCK */

                            carrito = []
                            document.querySelector("#contadorProductosCarrito").textContent = carrito.length;
                            document.querySelector("#subtotal").textContent = 0;
                            let hijosCarrito = contenedorProductosCarrito.childNodes
                            while (hijosCarrito.length != 0) {
                                hijosCarrito[0].remove();
                            }
                        }, 3000);
                    } else {
                        document.querySelector(".contenedorErrorFormulario").innerHTML = ` 
                        <p style="color: red; font-weight: bold" id="parrafoError">*Debes completar todos los campos*</p>
                        `
                    }

                })

            })


            document.querySelector(".identidadConfirmada").addEventListener("click", () => {
                document.querySelector(".cargando").innerHTML = `
                <br>
                <br>
                <img src="img/cargando.gif" alt="cargando" style="width: 50px; height: 50px" >
            `
                setTimeout(function () {
                    document.querySelector(".modal-header").innerHTML =
                        `
                <h5>Compra Realizada<i class="fa fa-check" style="margin-left: 4px;"></i></h5>
                <button type="button" style="float: right" class="btn-close" data-bs-dismiss="modal"></button>
            `
                    document.querySelector(".modal-body").innerHTML =
                        `
                <h3>¡GRACIAS ${datosUsuario.nombreUsuario} POR TU COMPRA!</h3>
                <br>
                <h4>Te hemos enviado tu factura electrónica a ${datosUsuario.mailUsuario}</h4>
                <br>
                <br>
                <button type="button" class="btn btn-success" data-bs-dismiss="modal">Aceptar<i
                class="fas fa-hand-spock" style="margin-left: 4px;"></i></button>
            `
                    /* COMPRAR Y REDUCIR STOCK */

                    carrito.forEach(disco => {
                        let discoStock = todosLosDiscos.filter(x => x.nombreDisco == disco.nombreDisco);
                        let numeroARestar = parseFloat(disco.stock);
                        discoStock[0].comprar(numeroARestar);
                    })

                    /* REDUCIR STOCK */

                    carrito = []
                    document.querySelector("#contadorProductosCarrito").textContent = carrito.length;
                    document.querySelector("#subtotal").textContent = 0;
                    let hijosCarrito = contenedorProductosCarrito.childNodes
                    while (hijosCarrito.length != 0) {
                        hijosCarrito[0].remove();
                    }
                }, 3000);
            })
        } else {
            let datosUsuario = {
                nombreUsuario: undefined,
                apellidoUsuario: undefined,
                mailUsuario: undefined,
                telefonoUsuario: undefined,
            }

            document.querySelector(".modal-header").innerHTML =
                `
                    <h5>CHECKOUT <i class="fas fa-cash-register" style="margin-left: 4px;"></i></h5>
                    <button type="button" style="float: right" class="btn-close" data-bs-dismiss="modal"></button>
                     `

            document.querySelector(".modal-body").innerHTML = `
                        <form id="formularioIndex">
                            <div class="container">
                                <div class="row">
                                    <div class="col-6">
                                        <div class="mb-3">
                                            <label for="name" class="form-label">Nombre </label>
                                            <input type="text" required name="nombre" id="name" class="form-control">
                                        </div>
                                        <div class="mb-3">
                                            <label for="surname" class="form-label">Apellido </label>
                                            <input type="text" required name="apellido" id="surname" class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="mb-3">
                                            <label for="mail" class="form-label">Email </label>
                                            <input type="email" required name="email" id="mail" class="form-control">
                                        </div>
                                        <div class="mb-3">
                                            <label for="phone" class="form-label">Teléfono </label>
                                            <input type="tel" required name="phone" id="phone" class="form-control">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-1">
                                        <span></span>
                                    </div>
                                    <div class="col-10">
                                        <label for="metodoPago" class="form-label"><i class="fa fa-money-check" style="margin-right: 5px"></i>Método de Pago</label>
                                        <br>
                                        <input type="radio" name="metodoPago" value="tarjeta" style="margin-right: 5px" required>Tarjeta de Crédito/Débito
                                        <br>
                                        <input type="radio" name="metodoPago" value="transferencia" style="margin-right: 5px" required>Transferencia Bancaria &nbsp;  &nbsp;
                                    </div>
    
                                    <div class="col-1">
                                        <span></span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="mt-3 col-12 cargando">
                                        <h4>Total $ ${precioTotal()} </h4>
                                        <button type="submit" class="btn btn-outline-success mt-2" id="btnSubmit">PAGAR</button>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="mt-3 col-12 contenedorErrorFormulario">
                                        
                                    </div>
                                </div>
                            </div>
                        </form>
                            `

            let btnSubmit = document.querySelector("#btnSubmit");
            btnSubmit.addEventListener("click", (event) => {
                event.preventDefault()
                datosUsuario.nombreUsuario = document.querySelector("#name").value.toUpperCase()
                datosUsuario.apellidoUsuario = document.querySelector("#surname").value.toUpperCase()
                datosUsuario.mailUsuario = document.querySelector("#mail").value;
                datosUsuario.telefonoUsuario = document.querySelector("#phone").value;
                if (datosUsuario.nombreUsuario.length >= 2 && datosUsuario.apellidoUsuario.length >= 2 && datosUsuario.mailUsuario.includes("@") && datosUsuario.mailUsuario.length > 4 && datosUsuario.telefonoUsuario.length >= 7) {
                    if (document.querySelector("#parrafoError") != undefined) {
                        document.querySelector("#parrafoError").remove()
                    }
                    localStorage.setItem("nombreUsuario", datosUsuario.nombreUsuario);
                    localStorage.setItem("apellidoUsuario", datosUsuario.apellidoUsuario);
                    localStorage.setItem("mailUsuario", datosUsuario.mailUsuario);
                    localStorage.setItem("telefonoUsuario", datosUsuario.telefonoUsuario);
                    document.querySelector(".cargando").innerHTML = `
                        <br>
                        <br>
                        <img src="img/cargando.gif" alt="cargando" style="width: 50px; height: 50px" >
                    `
                    setTimeout(function () {
                        document.querySelector(".modal-header").innerHTML =
                            `
                        <h5>Compra Realizada<i class="fa fa-check" style="margin-left: 4px;"></i></h5>
                        <button type="button" style="float: right" class="btn-close" data-bs-dismiss="modal"></button>
                    `
                        document.querySelector(".modal-body").innerHTML =
                            `
                        <h3>¡GRACIAS ${datosUsuario.nombreUsuario} POR TU COMPRA!</h3>
                        <br>
                        <h4>Te hemos enviado tu factura electrónica a ${datosUsuario.mailUsuario}</h4>
                        <br>
                        <br>
                        <button type="button" class="btn btn-success" data-bs-dismiss="modal">Aceptar<i
                        class="fas fa-hand-spock" style="margin-left: 4px;"></i></button>
                    `
                        /* COMPRAR Y REDUCIR STOCK */

                        carrito.forEach(disco => {
                            let discoStock = todosLosDiscos.filter(x => x.nombreDisco == disco.nombreDisco);
                            let numeroARestar = parseFloat(disco.stock);
                            discoStock[0].comprar(numeroARestar);
                        })

                        /* REDUCIR STOCK */

                        carrito = []
                        document.querySelector("#contadorProductosCarrito").textContent = carrito.length;
                        document.querySelector("#subtotal").textContent = 0;
                        let hijosCarrito = contenedorProductosCarrito.childNodes
                        while (hijosCarrito.length != 0) {
                            hijosCarrito[0].remove();
                        }
                    }, 3000);
                } else {
                    document.querySelector(".contenedorErrorFormulario").innerHTML = ` 
                    <p style="color: red; font-weight: bold" id="parrafoError">*Debes completar todos los campos*</p>
                    `
                }

            })
        }

    }
})