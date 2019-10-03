const express = require ('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb+srv://duudu952:cagueinamae12@clustertindev-pqaez.mongodb.net/tindev?retryWrites=true&w=majority', { useUnifiedTopology: true , useNewUrlParser: true } );

const server  = express();
server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);