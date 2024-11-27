class Produto {
    constructor(id, nome, quantidade) {
        this.id = id;
        this.nome = nome;
        this.quantidade = quantidade;
    }

    aumentarQuant(quant) {
        this.quantidade += quant;
    }

    diminuirQuant(quant) {
        if (this.quantidade - quant >= 0) {
            this.quantidade -= quant;
        }
    }
}

let produtos = [];
let produtoId = 0;

function addProduct() {
    const nomeprodutos = document.getElementById('nomeprodutos').value;
    const produtosQuant = parseInt(document.getElementById('produtosQuant').value);
    if (nomeprodutos && produtosQuant >= 0) {
        const novoproduto = new Produto(produtoId++, nomeprodutos, produtosQuant);
        produtos.push(novoproduto);
        atualizarListaProdutos();
        document.getElementById('nomeprodutos').value = '';
        document.getElementById('produtosQuant').value = '';
    }
}

function removerProduto(id) {
    produtos = produtos.filter(produto => produto.id !== id);
    atualizarListaProdutos();
}

function atualizarListaProdutos() {
    const listaProdutos = document.getElementById('ListaProdutos');
    listaProdutos.innerHTML = '';
    produtos.forEach(produto => {
        const produtoItem = document.createElement('li');
        produtoItem.innerHTML = `
            ${produto.nome} - ${produto.quantidade}
            <div>
                <button onclick="aumentarQuant(${produto.id})">+</button>
                <button onclick="diminuirQuant(${produto.id})">-</button>
                <button onclick="removerProduto(${produto.id})">Remover</button>
            </div>
        `;
        listaProdutos.appendChild(produtoItem);
    });
}

function aumentarQuant(id) {
    const produto = produtos.find(produto => produto.id === id);
    if (produto) {
        produto.aumentarQuant(1);
        atualizarListaProdutos();
    }
}

function diminuirQuant(id) {
    const produto = produtos.find(produto => produto.id === id);
    if (produto) {
        produto.diminuirQuant(1);
        atualizarListaProdutos();
    }
}