const express = require('express');
const app = express ();

app.get('/', (req, res)=>{
    res.status(200).send(
        [
            {NomeProduto:"Tênis Nike",Valor:241.80},
            {NomeProduto:"Tênis Mizuno",Valor:221.50},
            {NomeProduto:"Tênis Topper",Valor:211.80}
        ]
    );
})

app.listen(3001, ()=>{
    console.log('Api rodando na porta 3001');
})