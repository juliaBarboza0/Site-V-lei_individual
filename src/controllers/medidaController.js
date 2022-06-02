var medidaModel = require("../models/medidaModel");

function votar(req, res) {

    const limite_linhas = 8;

    var idJogador = req.params.idJogador;

    console.log(`votando`);



     medidaModel.votar(idJogador, limite_linhas).then(function (resultado) {
         if (resultado.length > 0) {
             res.status(200).json(resultado);
         } else {
             res.status(204).send("Nenhum resultado encontrado!")
         }
     }).catch(function (erro) {
         console.log(erro);
         console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
         res.status(500).json(erro.sqlMessage);
     });
}

function buscarUltimasMedidas(req, res) {

    const limite_linhas = 8;

    var idJogador = req.params.idJogador;

    console.log(`votando`);



     medidaModel.buscarUltimasMedidas(idJogador, limite_linhas).then(function (resultado) {
         if (resultado.length > 0) {
             res.status(200).json(resultado);
         } else {
             res.status(204).send("Nenhum resultado encontrado!")
         }
     }).catch(function (erro) {
         console.log(erro);
         console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
         res.status(500).json(erro.sqlMessage);
     });
}


function buscarMedidasEmTempoReal(req, res) {

    var idJogador = req.params.idJogador;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal(idJogador).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    votar,
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal

}