const productos = [
    {nombre: "Camiseta futbol", precio: 15000, id: "1", img: "../img/camiseta-de-futbol.jpg", idCat:"2"},
    {nombre: "Top running", precio: 8800, id: "2", img: "../img/top-puma-running.jpg", idCat:"3"},
    {nombre: "Zapatillas velcro", precio: 22000, id: "3", img: "../img/zapatillas-casual-velcro.jpg", idCat:"4"},
    {nombre: "Buzo con capucha", precio: 6500, id: "4", img: "../img/buzo-con-capucha.jpg", idCat:"2"},
    {nombre: "Calza entrenamiento", precio: 12000, id: "5", img: "../img/calza-vairo-entrenamiento.jpg", idCat:"3"},
    {nombre: "Pantalon de futbol", precio: 9000, id: "6", img: "../img/pantalon-de-futbol.jpg", idCat:"2"},
    {nombre: "Campera de abrigo", precio: 20400, id: "7", img: "../img/campera-de-abrigo-con-capucha.jpg", idCat:"4"},
    {nombre: "Campera con capucha", precio: 10400, id: "8", img: "../img/campera-con-capucha.jpg", idCat:"3"},
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout( ()=> {
            resolve(productos)
        }, 2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise ( resolve => {
        setTimeout( () => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria)
        }, 2000)
    }) 
}