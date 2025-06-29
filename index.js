
import express from 'express';
import cors from 'cors';
import productosRouter from './routes/productos.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/api/productos', productosRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
