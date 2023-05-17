const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function adicionarUsuario(nome, email, senha) {
    const novoUsuario = await prisma.usuario.create({
        data: {
            nome,
            email,
            senha,
        },
    });

    return novoUsuario;
}

// Exemplo de uso
adicionarUsuario('João', 'joao@gmail.com', '123456')
    .then((usuario) => {
        console.log('Novo usuário adicionado:', usuario);
    })
    .catch((err) => {
        console.error('Erro ao adicionar usuário:', err);
    })
    .finally(() => {
        prisma.$disconnect();
    });