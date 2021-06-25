'use strict';
const express = require('express');
require('dotenv').config();
const cors = require('cors');
require('./database/db.js');
const cartRouter = require('./routers/routes/cart.js');
const productRouter = require('./routers/routes/product.js');

const app = express();

app.use(express.json());
app.use(cors());


app.get('/test', (req, res) => {
	res.send('test')
})
app.use('/cart', cartRouter);
app.use('/product', productRouter);

const PORT = process.env.PORT || 4000;



app.listen(PORT, () => {
	console.log(`Listening On PORT ${PORT}`);
});
