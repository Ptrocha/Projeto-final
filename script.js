var valorTotal = 0;

function addCarrinho(valor, elemento) {
    if (elemento.checked == true) {
        valorTotal = Number(valor) + valorTotal
        document.querySelector("#valor_total").innerHTML = "Total: R$" + valorTotal.toFixed(2)
    } else {
        valorTotal = valorTotal - Number(valor) 
        document.querySelector("#valor_total").innerHTML = "Total: R$" + valorTotal.toFixed(2)
    }
}