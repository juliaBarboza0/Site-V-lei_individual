var database = require("../database/config");

function votar(idJogador, limite_linhas){
    instrucaoSql = `INSERT INTO
    votacao (fkJogador) 
    VALUES (${idJogador})`;
    console.log('Executando a instrucao Sql: \n' + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidas(idJogador, limite_linhas) {

    instrucaoSql = `select nome, count(fkJogador) as id 
    from jogadores
    join votacao
    on fkJogador = idJogador
    group by fkJogador
    order by fkJogador`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(IdJogador) {
    instrucaoSql = `select nome, count(fkJogador) as id from jogadores
    join votacao
    on fkJogador = idJogador
    group by fkJogador
    order by fkJogador`;
console.log("Executando a instrução SQL: \n" + instrucaoSql);
return database.executar(instrucaoSql);
}


module.exports = {
    votar,
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}