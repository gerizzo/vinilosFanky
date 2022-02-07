class Disco {
    constructor(nombreDisco, bandaArtista, precio, genero, stock, disponible, img) {
        this.nombreDisco = nombreDisco;
        this.bandaArtista = bandaArtista;
        this.precio = parseFloat(precio);
        this.genero = genero.toUpperCase();
        this.stock = parseInt(stock);
        this.disponible = disponible;
        this.img = img;
    }
    comprar(cantidad) {
        this.stock = this.stock - cantidad;
    }
}

let discosMasVendidos = [];
let discosUltimosLanzamientos = [];
let discosOfertas = [];
let discosEnvioGratis = [];
let todosLosDiscos = [];

/* CARGAR DISCOS QUE VAN A SER AGREGADOS AUTOMATICAMENTE AL HTML*/
/* CARGAR DISCOS MÁS VENDIDOS */

discosMasVendidos.push(new Disco("Clics Modernos", "Charly García", "5500.00", "Rock Nacional", 4, true, "./img/clicsmodernos.jpg"));
discosMasVendidos.push(new Disco("Pubis Angelical", "Charly García", "5500.00", "Rock Nacional", 2, true, "./img/pubisangelical.jpg"));
discosMasVendidos.push(new Disco("Abbey Road", "The Beatles", "7000.00", "Rock Británico", 3, true, "./img/abbeyroad.jpg"));
discosMasVendidos.push(new Disco("Nevermind", "Nirvana", "5500.00", "Rock Yanqui", 3, true, "./img/nevermind.jpg"));
discosMasVendidos.push(new Disco("Thriller", "Michael Jackson", "6500.00", "Pop", 4, true, "./img/thriller.jpg"));
discosMasVendidos.push(new Disco("21", "Adele", "6000.00", "Pop", 8, true, "./img/21.jpg"));
for (let i = 0; i < discosMasVendidos.length; i++) {
    todosLosDiscos.push(discosMasVendidos[i]);
}

/* CARGAR DISCOS ULTIMOS LANZAMIENTOS */

discosUltimosLanzamientos.push(new Disco("La Dirección", "Conociendo Rusia", "4500.00", "Rock Nacional", 6, true, "./img/ladireccion.jpg"));
discosUltimosLanzamientos.push(new Disco("Luz", "No Te Va Gustar", "4500.00", "Rock Nacional", 5, true, "./img/luz.jpg"));
discosUltimosLanzamientos.push(new Disco("As You Were", "Liam Gallagher", "6000", "Rock Británico", 8, true, "./img/asyouwere.jpg"));
discosUltimosLanzamientos.push(new Disco("Dios Los Cria", "Andrés Calamaro", "5500", "Rock Nacional", 8, true, "./img/diosloscria.jpg"));
discosUltimosLanzamientos.push(new Disco("Oscuro Éxtasis", "WOS", "4000", "Trap / Rap", 7, true, "./img/oscuroextasis.jpg"));
discosUltimosLanzamientos.push(new Disco("El Madrileño", "C Tangana", "5000", "Trap / Rap", 5, true, "./img/elmadrileño.jpg"));
for (let i = 0; i < discosUltimosLanzamientos.length; i++) {
    todosLosDiscos.push(discosUltimosLanzamientos[i]);
}
/* CARGAR DISCOS OFERTAS */

discosOfertas.push(new Disco("Peluson Of Milk", "Luis A. Spinetta", "3700.00", "Rock Nacional", 4, true, "./img/pelusonofmilk.jpg"));
discosOfertas.push(new Disco("Justice", "Justin Bieber", "5000", "Pop", 9, true, "./img/justice.jpg"));
discosOfertas.push(new Disco("Me Veras Volver #1", "Soda Stereo", "3500", "Discos En Vivo", 6, true, "./img/meverasvolver1.jpg"));
discosOfertas.push(new Disco("Me Veras Volver #2", "Soda Stereo", "3500", "Discos En Vivo", 6, true, "./img/meverasvolver2.jpg"));
discosOfertas.push(new Disco("El Regreso", "Andrés Calamaro", "3750", "Discos En Vivo", 7, true, "./img/elregreso.jpg"));
discosOfertas.push(new Disco("Trap de Verdad", "YSY A", "3500", "Trap / Rap", 4, true, "./img/trapdeverdad.jpg"));

for (let i = 0; i < discosOfertas.length; i++) {
    todosLosDiscos.push(discosOfertas[i]);
}

/* CARGAR DISCOS ENVIO GRATIS */
discosEnvioGratis.push(new Disco("Some Girls", "Rolling Stones", "5500.00", "Rock Británico", 3, true, "./img/somegirls.jpg"));
discosEnvioGratis.push(new Disco("Vitalogy", "Pearl Jam", "6000", "Rock Yanqui", 5, true, "./img/vitalogy.jpg"));
discosEnvioGratis.push(new Disco("American Idiot", "Green Day", "6500", "Rock Yanqui", 8, true, "./img/americanidiot.jpg"));
discosEnvioGratis.push(new Disco("Dig Out Your Soul", "Oasis", "6500", "Rock Británico", 6, true, "./img/digoutyoursoul.jpg"));
discosEnvioGratis.push(new Disco("Definitely Maybe", "Oasis", "6500", "Rock Británico", 4, true, "./img/definitelymaybe.jpg"));
discosEnvioGratis.push(new Disco("Let It Be", "The Beatles", "7000", "Rock Británico", 4, true, "./img/letitbe.jpg"));

for (let i = 0; i < discosEnvioGratis.length; i++) {
    todosLosDiscos.push(discosEnvioGratis[i]);
}

/* AÑADIR MÁS DISCOS */
todosLosDiscos.push(new Disco("Oasis Knebworth 1996", "Oasis", "6000", "Discos en Vivo", 5, true, "./img/knebworth96.jpg"));
todosLosDiscos.push(new Disco("Fuerza Natural Tour 2009", "Gustavo Cerati", "4500", "Discos en Vivo", 6, true, "./img/fuerzanaturaltour2009.jpg"));
todosLosDiscos.push(new Disco("Avida Dollars", "C Tangana", "5000", "Trap / Rap", 4, true, "./img/avidadollars.jpg"));
todosLosDiscos.push(new Disco("Impuesto De Fé", "Babasónicos", "5500", "Discos en Vivo", 4, true, "./img/impuestodefe.jpg"));
todosLosDiscos.push(new Disco("Parte De Mí", "Nicki Nicole", "4500", "Trap / Rap", 7, true, "./img/partedemi.jpg"));
todosLosDiscos.push(new Disco("Desde El Fin Del Mundo", "Duki", "4500", "Trap / Rap", 5, true, "./img/desdeelfindelmundo.jpg"));
todosLosDiscos.push(new Disco("Get A Grip", "Aerosmith", "7000", "Rock Yanqui", 5, true, "./img/getagrip.jpg"));
todosLosDiscos.push(new Disco("Aerosmith", "Aerosmith", "7000", "Rock Yanqui", 5, true, "./img/aerosmith.jpg"));
todosLosDiscos.push(new Disco("Hotel California", "Eagles", "6500", "Rock Yanqui", 2, true, "./img/hotelcalifornia.jpg"));
todosLosDiscos.push(new Disco("Songs About Jane", "Maroon 5", "7000", "Pop", 6, true, "./img/songsaboutjane.jpg"));
todosLosDiscos.push(new Disco("In Between Dreams", "Jack Johnson", "6000", "Pop", 4, true, "./img/inbetweendreams.jpg"));
todosLosDiscos.push(new Disco("Born And Raised", "John Mayer", "6500", "Pop", 4, true, "./img/bornandraised.jpg"));

/* ASIGNAR UNA ID A CADA DISCO */

for (let i = 0; i < todosLosDiscos.length; i++) {
    todosLosDiscos[i].id = i + 1;
}