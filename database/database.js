const Sequelize = require("sequelize")
const connection = new Sequelize('blogremixo', 'root', 'senha',{ // nome do banco de dados, usuario, senha
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
});



module.exports = connection;