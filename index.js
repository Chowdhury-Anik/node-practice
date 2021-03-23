const express = require('express');





const app = express();

const users = ['Manik', 'Bonik', 'Shalik', 'falink', 'Montu'];

app.get('/', (req, res) => {

    const products = {
        desktop: 'intel',
        price: 200,
        laptop: 'AMD',
        price: 300

    }
    res.send(products);
});
app.get('/products/desktop', (req, res) => {
    res.send({ products: 'desktop', quantity: 10, price: 50000 });
});

app.get('/users/:id/', (req, res) => {
    const id = req.params.id;
    const name = users[id];
    res.send({ id, name });

})

app.listen(3000, () => console.log('Listing to port 3000'));