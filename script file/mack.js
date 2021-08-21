
function updateCost(costId, cost) {
    const costSpan = document.getElementById(costId);
    costSpan.innerText = cost;
}
// total cost 

function totalCalculation() {
    // get best price
    const bestPrice = document.getElementById('best-price');
    const bestPriceText = bestPrice.innerText;
    const bestPriceNum = parseInt(bestPriceText);

    // get money cost
    const moneySpan = document.getElementById('extra-memory');
    const moneyText = moneySpan.innerText;
    const moneyNum = parseInt(moneyText);

    // get storage cost
    const storageSpan = document.getElementById('storage-cost');
    const storageText = storageSpan.innerText;
    const storageNum = parseInt(storageText);

    // get delivery cost
    const deliverySpan = document.getElementById('delivery-cost');
    const deliveryText = deliverySpan.innerText;
    const deliveryNum = parseInt(deliveryText);

    // sub total
    const subTotal = bestPriceNum + moneyNum + storageNum + deliveryNum;
    document.getElementById('total-price').innerText = subTotal;
    document.getElementById('total').innerText = subTotal;
}

// event  handler

// event handler for memoey 

document.getElementById('memory-one').addEventListener('click', function () {
    updateCost('extra-memory', 0);
    totalCalculation();
})

document.getElementById('memory-two').addEventListener('click', function () {
    updateCost('extra-memory', 180);
    totalCalculation();
})

// event handler for storage 

document.getElementById('storage-one').addEventListener('click', function () {
    updateCost('storage-cost', 0);
    totalCalculation();
})

document.getElementById('storage-two').addEventListener('click', function () {
    updateCost('storage-cost', 100);
    totalCalculation();
})

document.getElementById('storage-three').addEventListener('click', function () {
    updateCost('storage-cost', 180);
    totalCalculation();
})

// event handler for delivery charge

document.getElementById('delivery-charge-one').addEventListener('click', function () {
    updateCost('delivery-cost', 0);
    totalCalculation();
})

document.getElementById('delivery-charge-two').addEventListener('click', function () {
    updateCost('delivery-cost', 20);
    totalCalculation();
})


// discount part 

document.getElementById('promo-button').addEventListener('click', function () {
    const inputField = document.getElementById('promo-input');
    const totalPrice = document.getElementById('total-price').innerText;
    const total = document.getElementById('total');
    
    const inputValue = inputField.value;
    if (inputValue == 'stevekaku') {
        total.innerText = totalPrice - totalPrice * 0.2;
        inputField.value = '';
    }
    else {
        alert("Please enter your promo code for discount");
    }
})