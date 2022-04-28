import express from 'express';
import handlers from './handlers.js';
import services from './services/index.js';

const app = express();
const PORT = 3000;

app.get('/', handlers(services).get);


app.listen(PORT, ()=>{
  console.log('app running');
})