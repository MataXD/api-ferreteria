import express from 'express';
import { productos } from '../data/db.js';

const router = express.Router();

// GET todos los productos
router.get('/', (req, res) => {
  res.json(productos);
});

// GET por ID
router.get('/:id', (req, res) => {
  const producto = productos.find(p => p.id === parseInt(req.params.id));
  if (!producto) return res.status(404).json({ mensaje: "Producto no encontrado" });
  res.json(producto);
});

// POST nuevo producto
router.post('/', (req, res) => {
  const { nombre, precio } = req.body;
  const nuevoProducto = { id: productos.length + 1, nombre, precio };
  productos.push(nuevoProducto);
  res.status(201).json(nuevoProducto);
});

// PUT actualizar producto
router.put('/:id', (req, res) => {
  const producto = productos.find(p => p.id === parseInt(req.params.id));
  if (!producto) return res.status(404).json({ mensaje: "Producto no encontrado" });

  const { nombre, precio } = req.body;
  producto.nombre = nombre;
  producto.precio = precio;

  res.json(producto);
});

export default router;
