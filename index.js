let objDevinHouse={
    plataforma:"DevinHouse",
    cursos:{dados:["SQL"],
    backend:["Java","Spring"],
    frontend:["Javascript","React"]},
    inovacao_constante:true
};

let objUser = {
    nome:"Fernando Andrada",
    idade: 54,
    cidade: "Ilha de SC"
}

objDevinHouse["objUser"]= objUser;

objUser["nome"] = "Fernando JC Andrada";

objUser["idade"] = "54";

console.table(objDevinHouse)





