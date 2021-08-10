const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = require('./models');



const postRouter = require('./routes/Posts');
app.use("/usuarios", postRouter);
const permisosRouter = require('./routes/Permisos');
app.use("/permisos", permisosRouter);
const usersRouter = require('./routes/Users');
app.use("/auth", usersRouter);



db.sequelize.sync().then(() =>{
    app.listen(3000, () => {
        console.log("Servidor conectado en puerto 3000");
    });
});

