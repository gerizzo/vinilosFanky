/* FUNCIONES CAPTURADORAS DE BOTONES 'COMPRAR' DE LAS CARDS */

let capturarBotones = () => {
    arregloBtnComprar = document.querySelectorAll(".btnComprar");
    let capturar = 1;
    for (let i = 0; i < arregloBtnComprar.length; i++) {
        arregloBtnComprar[i].addEventListener("click", (e) => {
            carritoIndex.classList.replace("animate__fadeOutRight", "animate__fadeInRight");
            botonCarrito.classList.add("colorCarritoActivado");
            funcionalidadBotones(e, i, capturar);
        });
    }
}

let capturarBotones2 = () => {
    arregloBtnComprar2 = document.querySelectorAll(".btnComprar2");
    let capturar = 2;
    for (let i = 0; i < arregloBtnComprar2.length; i++) {
        arregloBtnComprar2[i].addEventListener("click", (e) => {
            carritoIndex.classList.replace("animate__fadeOutRight", "animate__fadeInRight");
            botonCarrito.classList.add("colorCarritoActivado");
            funcionalidadBotones(e, i, capturar);
        });
    }
}

/* FUNCIONES PARA MODIFICAR EL SUBTOTAL EN EL CARRITO Y EL CONTADOR DE PRODUCTOS DEL CARRITO */

let precioTotal = () => {
    let totalPrice = 0;
    carrito.forEach(element => {
        totalPrice += element.precio * element.stock;
    });
    document.querySelector("#subtotal").textContent = totalPrice;
    return totalPrice;
};

let actualizarContadorCarrito = () => {
    document.querySelector("#contadorProductosCarrito").textContent = carrito.length;
};


/* FUNCIONES PARA LAS FUNCIONALIDADES DE LOS BOTONES 'COMPRAR' */

let funcionalidadBotones = (e, i, capturar) => {
    let contenedorDisco = e.target.parentElement;
    let nombre = contenedorDisco.querySelector(".nombreDisco").textContent;
    let disco = todosLosDiscos.filter(x => x.nombreDisco == nombre);
    let nombreDisco = disco[0].nombreDisco;

    /* VERIFICO SI EL DISCO ESTÁ CARGADO AL CARRO YA, CON some() */

    if (capturar == 1) {
        if (disco[0].stock == 0) {
            console.warn("NO HAY STOCK SUFICIENTE DE " + nombreDisco.toUpperCase());
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
                                        <div class="col-5 text-center">
                                            <p class="nombreDiscoEnCarrito">${nombreDisco}</p>
                                            <p class="nombreDiscoEnCarrito"><strong>$${precio}</strong></p>
                                        </div>
                                        <div class="col-5">
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
    } else {
        if (disco[0].stock == 0) {
            console.warn;
            ("NO HAY STOCK SUFICIENTE DE " + nombreDisco.toUpperCase());
            arregloBtnComprar2[i].textContent = "No Disponible"
            arregloBtnComprar2[i].classList.replace("btn-dark", "btn-danger")
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
                                        <div class="col-5 text-center">
                                            <p class="nombreDiscoEnCarrito">${nombreDisco}</p>
                                            <p class="nombreDiscoEnCarrito"><strong>$${precio}</strong></p>
                                        </div>
                                        <div class="col-5">
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
    }
    precioTotal();
    actualizarContadorCarrito();
};