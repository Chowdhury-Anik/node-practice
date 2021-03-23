const express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');




const app = express();
app.use(bodyParser.json());

app.use(cors());

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


app.get('/users/:id/', (req, res) => {
    const id = req.params.id;
    const name = users[id];
    res.send({ id, name });

})

//post
app.post('/addUser', (req, res) => {
    //save to database
    const user = req.body;
    user.id = 55;
    res.send(user);
})

app.listen(3000, () => console.log('Listing to port 3000'));