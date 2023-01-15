import ProductManager from "./app.js";

let productManager = new ProductManager('./files/products.json');

const Products = async () => {
 //Empezar a utilizar el productManager 
    await productManager.addProduct("Computadora", "La mejor compu", 120000, "No thumbail", 23, "compu")
    await productManager.addProduct("Telefono", "El mejor telefono", 150000, "No thumbail", 2, "tel")
}

Products();