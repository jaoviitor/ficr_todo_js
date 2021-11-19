const cardNovaLista = document.getElementById('cardNovaLista')
const btnNovaLista = document.getElementById('btnNovaLista')
const formNovaLista = document.getElementById('novaLista')
const divListas = document.getElementById('listas')

let listas = []

btnNovaLista.addEventListener('click', function(){
    cardNovaLista.style.display = 'block'
})

formNovaLista.addEventListener('submit', function(event) {
    event.preventDefault()
    const inputTitulo = document.querySelector('input[name="tituloLista"]')
    if(inputTitulo.value != '') {
        const novaLista = {
            id: listas.length + 1,
            titulo: inputTitulo.value
        }
        inputTitulo.value = ''
        listas.push(novaLista)
        window.localStorage.listas = JSON.stringify(listas)
        renderList()
    }
    console.log(listas)
})

formNovaLista.addEventListener('reset', function(event) {
    cardNovaLista.style.display = 'none'
})
// função para adicionar os itens na tela
function renderList () {
    listas = JSON.parse(window.localStorage.listas)
    // limpando a div quer recebe os cards das listas
    divListas.innerHTML = ""
    // para cada lista arrey de listas, cria um novo card na tela
    listas.map(lista => {
        // criando um titulo pro card
    let h2Tag = document.createElement('H2')
    // adiciona o título da lista salca no título do card
    h2Tag.innerHTML = lista.titulo
    // cria uma div para ser o card da lista
    let divTag = document.createElement('DIV')
    // adiciona a classe card-lista a div para o css
    divTag.setAttribute('class','card-lista')
    // adiciona o h2 a div
    divTag.appendChild(h2Tag)
    // adiciona a duv.card-lista a div que contem todas as listas na tela
    divListas.appendChild(divTag)
    })
}
// verifica se existe algo no localStorage para iniciar
if (window.localStorage.listas?.length > 0) {
    renderList
}