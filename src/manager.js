import ProductManager from "./app.js";

let productManager = new ProductManager('./src/files/products.json');

const Products = async () => {
 //Empezar a utilizar el productManager 
    await productManager.addProduct("Celular", "El mejor celular", 150000, "No thumbail", 22, "cel")
    await productManager.addProduct("Auto", "El mejor auto", 15300000, "No thumbail", 6, "auto")
    await productManager.addProduct("Heladera", "La mejor heladera", 153000, "No thumbail", 20, "heladera")
    await productManager.addProduct("Libro", "El mejor libro", 1000, "No thumbail", 12, "libro")
    await productManager.addProduct("Ipod", "El mejor ipod", 1500, "No thumbail", 9, "ipod")
    await productManager.addProduct("Iphone", "El mejor iphone", 350000, "No thumbail", 5, "iphone")
    await productManager.addProduct("Auriculares", "El mejor auricular", 15000, "No thumbail", 1, "auris")
    await productManager.addProduct("Teclado", "El mejor teclado", 10000, "No thumbail", 16, "teclado")
    await productManager.addProduct("Mouse", "El mejor mouse", 8500, "No thumbail", 29, "mouse")
    await productManager.addProduct("Silla gamer", "La mejor silla gamer", 100000, "No thumbail", 9, "silla")
}

Products();