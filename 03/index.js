

const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],

    addProduto: function(prod){
        let idIgual = 0;
    for(i = 0; i < this.produtos.length; i++) {
        if (prod.id == this.produtos[i].id) {
            this.produtos[i].qtd += prod.qtd;
            idIgual ++;
        }
    }
    if (idIgual < 1) {
        this.produtos.push(prod);
    }
    },

    imprimirResumo: function() {
        console.log(`Cliente: ${this.nomeDoCliente}`)
        console.log(`Total de itens: ${this.calcularTotalDeItens()}`);
        console.log(`Total a pagar: R$ ${this.calcularTotalAPagar()}`);
},

    imprimirDetalhes: function() {
        //console.log(`Cliente: ${this.nomeDoCliente}`)
        for(i = 0; i < this.produtos.length; i++) {
            console.log(`Item ${this.produtos[i].id} - ${this.produtos[i].nome} ${this.produtos[i].qtd} und - R$ ${((this.produtos[i].precoUnit * this.produtos[i].qtd)/100).toFixed(2)}`)
        }
        console.log(`Total de itens: ${this.calcularTotalDeItens()}`);
        console.log(`Total a pagar: R$ ${this.calcularTotalAPagar()}`);
        
    },
    calcularTotalDeItens: function() {
        let somaProdutos = 0;
        for(i = 0; i < this.produtos.length; i++) {
            somaProdutos += this.produtos[i].qtd;
        }
        return somaProdutos;
    },

    calcularTotalAPagar: function() {
        let totalAPagar = 0;
        for(i = 0; i < this.produtos.length; i++) {
            totalAPagar += this.produtos[i].qtd * this.produtos[i].precoUnit;
        }
        return (totalAPagar/100).toFixed(2);
    },

    calcularDesconto: function() {
        let valorTotal = this.calcularTotalAPagar();
        let descontoB = 0;
        let menorValor = this.produtos[0].precoUnit;
        totalItens = this.calcularTotalDeItens() 
                for(i = 0; i < this.produtos.length; i++) {
                    if(totalItens > 4) {
                        if(menorValor > this.produtos[i].precoUnit) {
                            menorValor = this.produtos[i].precoUnit;
                        }
                    } else {
                        menorValor = 0;
                    }
            }
                if(valorTotal > 100) {
                    descontoB = valorTotal * 0.10;
                }
                let descontoA = menorValor/100;
                if(descontoA > descontoB) {
                    return `R$${descontoA.toFixed(2)} de desconto`;
                } else {
                    return `R$${descontoB.toFixed(2)} de desconto`;
                }
    }
}

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
};

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
};
carrinho.addProduto(novaBermuda);
carrinho.addProduto(novoTenis);
carrinho.imprimirResumo();
carrinho.imprimirDetalhes();
console.log(carrinho.calcularDesconto());