import express from 'express';
import ProductManager from './src/app.js';

//Llamo al product manager
const productManager = new ProductManager('./src/files/products.json')

//Declaro el puerto
const port = 8080;

//Inicializo express
const app = express();


//Gets
app.get('/products', async (req, res) => {
    const {limit} = req.query;
    const products = await productManager.getProducts();
    if(limit){
        res.json(products.slice(0, limit));
    }else{
        res.json(products);
    }
})

app.get('/products/:pid', async (req, res) => {
    const {pid} = req.params;
    const product = await productManager.getProductById(pid);
    res.json({
        'product': product
    });
})

//Inicializo el servidor en el puerto indicado
app.listen(port, () => {
    console.log('listening on port ' + port);
});