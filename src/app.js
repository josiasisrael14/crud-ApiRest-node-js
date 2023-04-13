import express from "express";
import config from './config'
import productsrouter from './routes/products.routes'

const  app= express()

app.set('port',config.port)
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(productsrouter)
export default app