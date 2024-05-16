import express from 'express';
import cors from 'cors';
import config from './config.js';
import pedidoRoutes from './routes/pedidoRoutes.js';
import fs from 'fs/promises'

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', pedidoRoutes);

function readFilePromise(filename) {
  return new Promise((resolve, reject) => {
      fs.readFile(filename, 'utf8')
          .then(data => resolve(data))
          .catch(err => reject(err))
  })
}

app.listen(config.port, () => {
  console.log(`O servidor está ativo @ ${config.hostUrl}`),

  readFilePromise('informacoes.txt')
  .then(data => {
      console.log(data)
  })
  .catch(err => {
      console.error('Erro ao ler o arquivo:', err)
  })
}
);
