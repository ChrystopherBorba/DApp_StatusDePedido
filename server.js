const express = require('express')
const app = express()
const port = newFunction()
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')
const blockchain = require('./blockchain.js')

//template engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('views engine', 'handlebars')

//body parser 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// arquivos estáticos

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views/images'));
// rota

//Enviar status
app.get('/', function (req, res) {
    blockchain.getData().then((data) => {
        msg = data
    })
    blockchain.getBlockNumber().then((number) => {
        res.render(__dirname + '/views/index.handlebars', { msg: msg, number: number });
    })
})

app.post('/', function (req, res) {
    var mensagem = req.body.msg;
    blockchain.setData(mensagem);
    res.redirect('/receive')
})

//Acompanhar Pedido 

app.get('/receive', function (req, res) {
    var number;
    blockchain.getBlockNumber().then((n) => {
        number = n
    })
    blockchain.getDataByBlockNumber(number).then((data) => {
        res.render(__dirname + '/views/receive.handlebars', { msg: data, numero: number });
    })
})

// Status atual

////////////////////////////////////////////////////////////////////////////////////////////////
app.listen(port, () => {
    console.log('server running on http://localhost:' + port)
    console.log(__dirname);
})

function newFunction() {
    return 8080;
}