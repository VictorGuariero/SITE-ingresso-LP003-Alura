function comprar(){
    let tipo = document.getElementById ('tipo-ingresso');
    let qtd = parseInt(document.getElementById ('qtd').value);


    //versão 2.0
    if (tipo.value == 'pista'){
        comprarPista(qtd);
    } else if (tipo.value == 'superior'){
        comprarSuperior(qtd);
    } else {
        comprarInferior(qtd);
    }

    /* vesão 1.0
    if(tipo.value == 'superior'){
        comprarSuperior(qtd);
    }

    if(tipo.value == 'inferior'){
        comprarInferior(qtd);
    }*/
}

function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById ('qtd-pista').textContent);

    if (qtd > qtdPista) {
        alert('Quantidade indisponível para compra de ingresso do tipo pista')
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById ('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!')
    }

}e

function comprarSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById ('qtd-superior').textContent);

    if (qtd > qtdSuperior) {
        alert('Quantidade indisponível para compra de ingresso do tipo cadeira superior')
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById ('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!')
    }

}

function comprarInferior(qtd){
    let qtdInferior = parseInt(document.getElementById ('qtd-inferior').textContent);

    if (qtd > qtdInferior) {
        alert('Quantidade indisponível para compra de ingresso do tipo cadeira inferior')
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById ('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!')
    }

}