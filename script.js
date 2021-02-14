const handleProduct = function (product, isIncrease) {
    const productClassInput = document.getElementById(`${product}-class-input`);
    const productClassInputValue = parseInt(productClassInput.value);
    if (isIncrease === true) {
        productClassInput.value = productClassInputValue + 1;
    }
    if (isIncrease === false && productClassInputValue > 0) {
        productClassInput.value = productClassInputValue - 1;
    }
    const productClass = document.getElementById(`${product}-class`);

    if (product === 'first') {
        productClass.innerText = 150 * productClassInput.value;
    }
    if (product === 'economy') {
        productClass.innerText = 100 * productClassInput.value;
    }
    handleTotal();
};
const handleTotal = function () {
    const firstClassInputValue = getInput('first');
    const economyClassInputValue = getInput('economy');
    const subTotal = getTotalBalance('sub');
    subTotal.innerText =
        firstClassInputValue * 150 + economyClassInputValue * 100;
    const subTotalNum = parseInt(subTotal.innerText);
    const totalTax = getTotalBalance('tax');
    totalTax.innerText = 0.1 * subTotalNum;
    const totalTaxNum = parseInt(totalTax.innerText);
    const totalBalance = getTotalBalance('balance');
    totalBalance.innerText = subTotalNum + totalTaxNum;
    return totalBalance.innerText;
};
const getInput = function (id) {
    const getClassInput = document.getElementById(`${id}-class-input`);
    const getClassInputValue = parseInt(getClassInput.value);
    return getClassInputValue;
};
const getTotalBalance = function (balance) {
    const getTotal = document.getElementById(`total-${balance}`);
    return getTotal;
};
const handleBooking = function () {
    const totalValue = handleTotal();
    const inputTicket1 = getInput('first');
    const inputTicket2 = getInput('economy');
    const sumOfTickets = inputTicket1 + inputTicket2;
    alert(
        `You have purchased ${inputTicket1} first class & ${inputTicket2} economy class tickets which is ${sumOfTickets} in total and your total bill is ${totalValue} only.`
    );
};
