import express from "express";
import router from "./Routes/routes.js";

//Crear Instancia
const app = express();


//Montar enrutador en app principal
app.use(express.json());
app.use(router);
app.set('port', 3000);

//Correr Servicio por puerto 3000
app.listen(app.get('port'), () => {
    console.log(`Servidor Escuchando por puerto ${app.get('port')}`);
});