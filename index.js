import { criarItemDaLista } from "./Construindo_paginas_dinamicas/scripts/CriarItemDaLista.js";
import  verificarListaVazia  from "./Construindo_paginas_dinamicas/scripts/verificarListaVazia.js";


const botaoAdicionar = document.getElementById("adicionar-item")
const listaDeCompras = document.getElementById("lista-de-compras")


botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    const itemDaLista = criarItemDaLista();
    listaDeCompras.appendChild(itemDaLista)
    verificarListaVazia(listaDeCompras);
})



verificarListaVazia(listaDeCompras);

