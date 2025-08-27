const inputItem = document.getElementById("input-item")
let contador = 0;
const listaDeCompras = document.getElementById("lista-de-compras")

const botaoAdicionar = document.getElementById("adicionar-item")

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    console.log(inputItem.value)
    if(inputItem.value === ""){
        alert("Você se esqueceu de preencher!!")
        return
    }

    const itemDaLista = document.createElement("li")
    const containerItemDaLista = document.createElement("div")
    containerItemDaLista.classList.add("lista-item-container")
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++;
    const nomeItem = document.createElement('p')
    nomeItem.innerText = inputItem.value;

    inputCheckbox.addEventListener("click", function(){
        if(inputCheckbox.checked){
            nomeItem.style.textDecoration = 'line-through';
        }else{
            nomeItem.style.textDecoration = 'none';
        }
    })

    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);
    itemDaLista.appendChild(containerItemDaLista)

    const diaDaSemana = new Date().toLocaleDateString("pt-br", {weekday: "long"})
    const data = new Date().toLocaleDateString("pt-br")
    const hora = new Date().toLocaleString("pt-br", {hour: "numeric", minute: "numeric"})

    const dataCompleta = `${diaDaSemana} (${data} ás ${hora})`
    const itemData = document.createElement("p")
    itemData.innerText = dataCompleta;
    itemData.classList.add("texto-data")
    
    itemDaLista.appendChild(itemData)
    
    
    listaDeCompras.appendChild(itemDaLista)

})



