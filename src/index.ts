/* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:

1. Type Alias para uma pessoa (TPerson) com as propriedades id, name, email, password e role;
2. Type Aliases para 2 contas (AdminAccount, NormalAccount) com as propriedades account e permission;
3. Crie exemplos de usuários Admin e Normal;
*/

type TPerson = {
    id: number | string,
    name: string,
    email: string,
    password: string,
    role: USER_ROLE
}

enum USER_ROLE {
    ADMIN = "administrador",
    NORMAL = "normal"
}

type TAdminAccount = {
    account: string,
    permission: string
}

type TNormalAccount = {
    account: string,
    permission: string
}

const administrator: TPerson & TAdminAccount = {
    id: "123",
    name: "Bruno",
    email: "bruno@email.com",
    password: "321654",
    role: USER_ROLE.ADMIN,
    account: "administrador",
    permission: "geral"
}

const normal: TPerson & TNormalAccount = {
    id: "456",
    name: "Juliano",
    email: "juliano@email.com",
    password: "987654",
    role: USER_ROLE.NORMAL,
    account: "normal",
    permission: "normal"
}

console.table(administrator)
console.table(normal)


/* PRÁTICA GUIADA - Parte 2
Vamos continuar nosso sistema de cadastro de usuários criando:

1. Enum com valores ADMIN e NORMAL e atribua ã propriedade role do Tperson;
2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);
3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;

*/ 
