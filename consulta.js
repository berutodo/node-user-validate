const sqlite3 = require('sqlite3').verbose();

// Crie uma nova instância do objeto Database
const db = new sqlite3.Database('db.sqlite');

// Exemplo de consulta SQL para recuperar todos os registros da tabela 'usuarios'
const query = 'SELECT * FROM usuarios';

// Execute a consulta
db.all(query, (err, rows) => {
    if (err) {
        console.error('Erro ao executar a consulta:', err.message);
    } else {
        // Os registros retornados estão contidos no array 'rows'
        rows.forEach((row) => {
            console.log(`ID: ${row.id}, Nome: ${row.nome}, Email: ${row.email}`);
        });
    }

    // Feche a conexão com o banco de dados quando terminar
    db.close();
});