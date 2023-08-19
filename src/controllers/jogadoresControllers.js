const jogadoresModel = require('../models/jogadorModel')

const getAll = async (req, res) => {
    const jogadores = await jogadoresModel.getAll()
    return res.status(200).json(jogadores)
}

const postJogador = async (req, res) => {
    const [postJogador] = await jogadoresModel.postJogador(req.body)
    return res.status(201).json({message: `Jogador ${req.body.nome}, criado com ID: ${postJogador.insertId}`})
}

module.exports = {
    getAll,
    postJogador
}