let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let EUR = 4.6985;
let GBP = 5.3404;
let USD = 4.5143;
let JPY = 3.2410
let BTC = 76039.1400;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let value = +amountElement.value;
    let currency = currencyElement.value;

    switch (currency) {
        case "EUR":
            result = value / EUR;
            break;
        case "GBP":
            result = value / GBP;
            break;
        case "USD":
            result = value / USD;
            break;
        case "JPY":
            result = (value / JPY) * 100;
            break;
        case "BTC":
            result = value / BTC;
            break;
    }
    resultElement.innerText = `${value.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
});