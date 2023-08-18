const jogadoresModel = require('../models/jogadoresModel')

const getAll = async (req, res) => {
    const jogadores = await jogadoresModel.getAll()
    return res.status(200).json(jogadores)
}

module.exports = {
    getAll
}