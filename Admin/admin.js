var add = document.getElementById("add")
var list = document.getElementById("list")
var orders = document.getElementById("orders")
var approvals = document.getElementById("approvals")

function addFood(){
    add.style.display = "block";
    list.style.display = "none";
    orders.style.display = "none";
    approvals.style.display = "none";
}

function foodList(){
    add.style.display = "none";
    list.style.display = "block";
    orders.style.display = "none";
    approvals.style.display = "none";
}

function foodOrders(){
    add.style.display = "none";
    list.style.display = "none";
    orders.style.display = "block";
    approvals.style.display = "none";
}

function foodApprovals(){
    add.style.display = "none";
    list.style.display = "none";
    orders.style.display = "none";
    approvals.style.display = "block";
}