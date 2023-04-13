import {Router} from 'express'
import { createNewProducts, getproduct,getproductIb,deleteproducts,gettotalproducts,updateProductById} from '../controllers/products.controller'
const router=Router()
router.get('/products',getproduct)
router.get('/products/:id',getproductIb)
router.get("/products/contar",gettotalproducts)
router.post('/products',createNewProducts)
router.delete('/products/:id',deleteproducts)
router.put('/products/:id',updateProductById)


export default  router