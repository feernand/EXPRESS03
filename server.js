const express=require('express');
const mysql=require('mysql2');

const app=express();

app.listen(3000,()=>{
    console.log("ligaste")
})

//criando da conexão com o banco de dado
const connection=mysql.createConnection({
    host: 'localhost',
    user: 'user_bd_tasks',
    pass: 'QL0P4TDcQGB2R97Djet7vXYHggatTZE4',
    database: 'nodejs_tasks'
})
//criamos a conexão com o banco de dados através do server

connection.connect(erro=>{
    if(erro){
    console.log("Erro na conexão ao MySQL"+erro.message);
    return
    }
    console.log("Conexão estabelecida");
})

//criando uma rota que execute a query
app.get('/',(req,res)=>{
    connection.query('SELECT * FROM tasks', (err,results,fields)=>{
        if(err){
            console.log(err.message);
            res.send("Erro ao obter a lista de taferas")
        }else{
        res.send(results);
        }
    })
})