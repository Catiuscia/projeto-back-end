const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function morstraMulher(request, response){
 response.json({
    nome: 'Maria Maria',
    imagem:'https://images.app.goo.gl/SiDnCSJNdL3ibDjZ7',
    minibio: 'Desenvolvedora e instrutora'
 })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na parta ", porta)
}

app.use(router.get('/mulher', morstraMulher))
app.listen(porta, mostraPorta)