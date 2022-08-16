const express = require('express');
const app = express();


const port = 3030;
const mainRouter = require('./routes/main')


/* recursos estaticos */

app.use(express.static('public'));

/* rutas */

app.use('/', mainRouter );


app.listen(3030, () => console.log("servidor levantado:D"))