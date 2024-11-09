const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome:'Maria Maria',
        imagem:'link da imagem',
        minibio: 'Desenvolvedora e instrutora'
    },
    {
        nome: 'Iana chan',
        imagem: 'link da imagem',
        minibio: 'fundadora da programaria'
    },
    {
        nome: 'Nina da Hora',
        imagem: 'link da imagem',
        minibio: 'Harcker antirracista'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na parta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)