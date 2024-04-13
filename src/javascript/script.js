const modalPayment = document.getElementById("modal-payment")
const modalPaymentButton = document.getElementById("modal-payment-button")

modalPayment.onclick = function () {
    modalPaymentButton.showModal()
}


const modalBank = document.getElementById("modal-bank")
const modalBankButton = document.getElementById("modal-bank-button")

modalBank.onclick = function () {
    modalBankButton.showModal()
}


const modalTypeCost = document.getElementById("modal-type-cost")
const modalTypeCostButton = document.getElementById("modal-type-cost-button")

modalTypeCost.onclick = function () {
    modalTypeCostButton.showModal()
}


const modalAccountName = document.getElementById("modal-account-name")
const modalAccountNameButton = document.getElementById("modal-account-name-button")

modalAccountName.onclick = function () {
    modalAccountNameButton.showModal()
}

const modalBudgetArea = document.getElementById("modal-budget-area")
const modalBudgetAreaButton = document.getElementById("modal-budget-area-button")

modalBudgetArea.onclick = function () {
    modalBudgetAreaButton.showModal()
}


const modalCostCenter = document.getElementById("modal-cost-center")
const modalCostCenterButton = document.getElementById("modal-cost-center-button")

modalCostCenter.onclick = function () {
    modalCostCenterButton.showModal()
}


const modalDre = document.getElementById("modal-dre")
const modal = document.querySelector("dialog")

modalDre.onclick = function () {
    modal.showModal()
}


document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});