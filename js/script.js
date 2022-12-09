{
    const calculateResult = (amount, currency) => {
        const EUR = 4.6985;
        const GBP = 5.3404;
        const USD = 4.5143;
        const JPY = 3.2410
        const BTC = 76039.1400;

        switch (currency) {
            case "EUR":
                return amount / EUR;
            case "GBP":
                return amount / GBP;
            case "USD":
                return amount / USD;
            case "JPY":
                return (amount / JPY) * 100;
            case "BTC":
                return amount / BTC;
        }
    };

    // const updateResultText = (amount, result, currency) => {
    //     const resultElement = document.querySelector(".js-result");
    //     resultElement.innerHTML = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
    // }

    const updateResultText = (text) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = text;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        // updateResultText(amount, result, currency);
        updateResultText(`${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}