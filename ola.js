const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraOla(requesst, response){
    response.send("Olá, mundo!")
}

function mostraPorta() {
    console.log("Servidor criado e rodando na parta ", porta)
}

app.use(router.get('/ola', mostraOla))
app.listen(porta, mostraPorta)
