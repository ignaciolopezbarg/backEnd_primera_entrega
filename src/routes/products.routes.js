import {Router} from 'express'
const router = Router();

const products = [];

//Ruta para traer los productos cuando se carguen al servidor
router.get("/", (req,res) =>{
    res.json(products)
})
 //Ruta para cargar un producto
router.post("/", (req,res) =>{
    const{ title,description,code,price,stock,category,img } =req.body
    //control que se ingresen todos los datos:
    if(!title||!description||!code||!price||!stock||!category ||!img){
        res.status(400).json({error: 'deben ingresarse todos los campos del producto'})
        return
    }
    //asignamos el id unico, autoincrementable:
    let id = products[products.length-1].id+1
    products.push({id,title,description,code,price,stock,category,img})

    res.status(200).json({id})
   
});




export default router;
