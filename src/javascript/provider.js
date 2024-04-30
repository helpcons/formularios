// ==================== add banco ====================
const modalBankProvider = document.getElementById("modal-bank-provider")
const modalBankButtonProvider = document.getElementById("modal-bank-provider-button")

modalBankProvider.onclick = function () {
    modalBankButtonProvider.showModal()
}

// ==================== sidebar ====================
document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar')
})

// ==================== add tipo de fornecedor ====================
function MudarEstado(el) {
    let tipoFornecedor = document.getElementById(el).style.display

    if (tipoFornecedor == "none")
        document.getElementById(el).style.display = 'block'
    else
        document.getElementById(el).style.display = 'none'
}

// clonando trecho que html
function novoBanco() {
    const elementoBank = document.getElementById('new-bank')
    const novoElemento = elementoBank.cloneNode(true)

    document.getElementById('new-bank').appendChild(novoElemento)
}