const express = require('express');
const router = require('./router');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(router);

app.listen(process.env.PORT, () => console.log(`Server iniciado na porta ${process.env.PORT}`));