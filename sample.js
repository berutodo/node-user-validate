const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db.sqlite');
db.run(`CREATE TABLE usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    senha TEXT NOT NULL
  )`);

db.run(`INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)`, ['João', 'joao@gmail.com', '123456']);

db.all(`SELECT * FROM usuarios`, (err, rows) => {
    if (err) {
        throw err;
    }

    rows.forEach(row => {
        console.log(row.id, row.nome, row.email, row.senha);
    });
});

db.close();