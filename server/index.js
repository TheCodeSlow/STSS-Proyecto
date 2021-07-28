const express = require('express');
const app = express();
app.use(express.json());
const db = require('./models');

//const router = require('./m');


const postRouter = require('./routes/Posts');
app.use("/usuarios", postRouter);

db.sequelize.sync().then(() =>{
    app.listen(3000, () => {
        console.log("Servidor conectado en puerto 3000");
    });
});

