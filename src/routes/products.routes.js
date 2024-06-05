import { Router } from "express";
const router = Router();

const products = [];

//Ruta para traer los productos cuando se carguen al servidor
router.get("/", (req, res) => {
  res.json(products);
});
//Ruta para cargar un producto
router.post("/", (req, res) => {
  const { title, description, code, price, stock, category, img } = req.body;
  //control que se ingresen todos los datos:
  if (
    !title ||
    !description ||
    !code ||
    !price ||
    !stock ||
    !category ||
    !img
  ) {
    res
      .status(400)
      .json({ error: "deben ingresarse todos los campos del producto" });
    return;
  }
  //asignamos el id unico, autoincrementable:
  let id = products[products.length - 1].id + 1;
  products.push({ id, title, description, code, price, stock, category, img });

  res.status(200).json({ pid });
});

//ruta para modificacion de algun producto:
router.put("/:id", (req, res) => {
  const productId = parseInt(req.params.productId);
  const newInfo = req.body;
  const product = products.find((p) => p.id === id);
  if (product) {
    res.status(200).json({ message: "producto actualizado correctamente" });
  }
  res.status(400).json({ message: "no existe el id " });
});

//ruta para eliminar algun producto:
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const productFound = user.find((u) => u.id === id);

  if (productFound) {
    const index = user.findIndex((u) => u.id === id);
    products.splice(index, 1);
    res.send(`El producto con id ${id} fue eliminado con exito`);
  } else {
    res.status(404).json({ error: "producto NO ENCONTRADO" });
  }
});

//Ruta que no esta definida, da un aviso:
router.get('*', (req,res)=>{
    res.status(404)
    res.send('ruta no definida')
})


export default router;
