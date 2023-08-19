const connection = require('../database/connection');

class jogadoresModel {
    constructor(nome, time_id, posicao, nota){
        this.nome = nome;
        this.time_id = time_id;
        this.posicao = posicao;
        this.nota = nota;
    }
}

const getAll = async () => {
    const [jogadores] = await connection.execute('SELECT * FROM jogadores');
    return jogadores
}

const postJogador = async (prop = jogadoresModel) => {
    const upTime = new Date(Date.now()).toUTCString();
    const query = 'INSERT INTO jogadores (nome, posicao, time_id, nota, update_at) VALUES (?, ?, ?, ?, ?)';
    const jogadorCriado = await connection.execute(query, [prop.nome, prop.posicao, prop.time_id, prop.nota, upTime]);
    return jogadorCriado;
 }

module.exports = {
    getAll,
    postJogador
}