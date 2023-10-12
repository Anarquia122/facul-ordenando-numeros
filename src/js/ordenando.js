//função 1 - trocar os valores de duas posições de um vet, recebendo como entrada o vet e as posicões.

swap = (vet, indice_1, indice_2) => {
    vet
};

//função 2 - embaralhar os elementos de um vet, tendo como parametros de entrada o vet e a quantidade de trocas.

shuffle = (vet, trocas) => {

};

//função 3 - ordenar um vet de inteiros com o algoritmo Bubble Sort, tendo como parametros de entrada o vet de inteiros.

bubble_sort = () => {
    let lista = document.getElementById('valores');
    let itens = lista.getElementsByTagName('li');
    let trocado;

    do {
        trocado = false;
        for (let i = 0; i < itens.length - 1; i++) {
            let itemAtual = parseInt(itens[i].textContent);
            let proximmoItem = parseInt(itens[i + 1].textContent);

            if (itemAtual > proximmoItem) {
                let temp = itemAtual;
                itens[i].textContent = proximmoItem;
                itens[i + 1].textContent = temp;
                trocado = true;
            }
        }
    } while (trocado);
};

//função 4 - ordenar um vet de inteiros utilizando o algoritmo Selection Sort, tendo como parâmetro de entrada o vet de valores inteiros.

decrescente = () => {
    let lista = document.getElementById('valores')
    let valores = Array.from(lista.getElementsByTagName('li'));

    valores.sort(function (a, b) {
        return parseInt(b.textContent) - parseInt(a.textContent);
    });

    lista.innerHTML = ''

    valores.forEach(function (item) {
        lista.appendChild(item)
    });
};

//função 5 - ordenar um vet de inteiros com o algoritmo Quick Sort, recursivo, tendo como parametros o vet, posição inicial e posição final.

quick_sort = (vet, posicao_ini, posicao_fim) => { };

//função 6 - de apoio a quick_sort, tendo como parametros o vet, posição inicial, posição final e valor do pivot.

particionamento = (vet, posicao_ini, posicao_fim, vet_pivot) => { };

//funções 7 - adicionar, ordenar e misturar.


let lista = document.querySelector('#valores');
let selecionado = document.getElementById('selecione')
let opcaoSelecionada = selecionado.options[selecionado.selectedIndex].value
console.log(opcaoSelecionada)

function add() {
    let tamanho = document.querySelector('#entrada');
    let valor_entrada = tamanho.value;

    if (valor_entrada.length !== 0) {
        let node = document.createElement("li");

        node.textContent = valor_entrada;
        lista.appendChild(node);

        tamanho.value = '';
    } else {
        alert('insira algum valor antes de tentar adicionar');
    };
};

let input = document.getElementById('entrada');
input, addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        add();
    }
});

let botao = document.getElementById('add');
botao.addEventListener('click', add)

function ordenar() {
    let select = document.getElementById('selecione')
    valor = select.options[select.selectedIndex].value

    if (valor == 'bubble_sort') {
        bubble_sort();
    } else {
        decrescente();
    }
};

let ordem = document.getElementById ('ordenar');
ordem.addEventListener('click', ordenar);

function misturar() {

    let vet = Array.from(lista.getElementsByTagName('li'));

    for (let i = vet.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = vet[i];
        vet[i] = vet[j];
        vet[j] = temp;
    }

    lista.innerHTML = '';

    vet.forEach(function (item) {
        lista.appendChild(item);
    })
};

let mistura = document.getElementById('misturar');
mistura.addEventListener("click", misturar)