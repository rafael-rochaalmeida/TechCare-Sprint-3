var mssql = require('mssql');
var connection = new mssql.ConnectionPool({
    user: 'adminlocal',
    password: '#Gftechcare',
    server: 'servertechcare11a.database.windows.net',
    database: 'bdTechCare',
    options: {
        encrypt: true
    },
    pool: {
        max: 4,
        min: 1,
        idleTimeoutMillis: 30000,
        connectionTimeout: 5000
    }
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Conectado com sucesso!')
});



module.exports = connection;
// const configuracoes = {
//     banco: {
//         server: "servertechcare11a.database.windows.net",
//         user: "adminlocal",
//         password: "#Gftechcare",
//         database: "bdTechCare",
        // options: {
        //     encrypt: true
        // },
        // pool: {
        //     max: 4,
        //     min: 1,
        //     idleTimeoutMillis: 30000,
        //     connectionTimeout: 5000
        // }
//     }
// }
 
// const sql = require('mssql');
// sql.on('error', err => {
//     console.error(`Erro de Conexão: ${err}`);
// });


// function conectar() {
//   sql.close();
//   return sql.connect(configuracoes.banco)
// } 

// module.exports = {
//     conectar: conectar,
//     sql: sql
// }
