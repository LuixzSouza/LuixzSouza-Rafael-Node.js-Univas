console.log("Rodando")
const express = require('express');
const app = express();
const pool = require("./db")

app.set('view engine', 'ejs');

app.get('./produtos', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM produtos');

        res.render('produtos', {produtos:rows});
    } catch (error) {
        console.log(error)
        res.status(500).send("Erro ao buscar")
    }
})

app.listen(3000)