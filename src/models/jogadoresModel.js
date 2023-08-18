const connection = require('./connection');

const getAll = async () => {
    const [jogadores] = await connection.execute('SELECT * FROM jogadores');
    return jogadores
}

module.exports = {
    getAll
}