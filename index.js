const express = require('express');
const router = require('./Routes/routes.js')

const app = express();
app.use(express.json());
app.use(router);

app.listen(3000, () => {
    console.log("escuchado por puerto 3000");
});