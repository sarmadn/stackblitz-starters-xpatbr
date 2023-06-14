const {Client} = require('pg');

const client = new Client({
    host: "10.0.0.25",
    user: "postgres",
    port: "5432",
    password: "asc92831",
    database: "db"

})

client.connect();

client.query('Select * from users', (err, res)=>{
    if (!err){
        console.log(res.rows);
    } else {
        console.log(err.message);
    }

    client.end;
})