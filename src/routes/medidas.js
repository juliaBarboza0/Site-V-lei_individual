var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/votar/:idJogador", function (req, res) {
    medidaController.votar(req, res);
});

router.get("/ultimas/:idJogador", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idJogador", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;