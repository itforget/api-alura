const express = require('express')
const app = express()
const rotaLivro = require('./rotas/livro')

app.use('/livros', rotaLivro)

const port = 8000

app.get('/', (req, res) => {
    res.send('Olá Mundo!')
})

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})