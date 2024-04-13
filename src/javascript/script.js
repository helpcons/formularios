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