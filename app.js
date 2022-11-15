const amountElement = document.querySelector('#amount');

const firstSelect = document.querySelector('#from');
const secondSelect = document.querySelector('#to');

const resultField = document.querySelectorAll('#amount')[1]

const currency = new Currency('RUB', 'USD');

addEventListener();

function addEventListener() {
    document.addEventListener('DOMContentLoaded', () => {
        fetch('https://api.exchangerate.host/latest?base=RUB')
            .then((res) => res.json())
            .then((data) => {
                fromRate.textContent = `1 RUB = ${(data.rates['USD']).toFixed(4)} USD`;
                toRate.textContent = `1 USD = ${(1 / (data.rates['USD'])).toFixed(4)} RUB`
            })
            .catch((err) => console.log(err))
    })
    amountElement.addEventListener('input', exchangeCurrency);
    firstSelect.addEventListener('click', exchangeFrom);
    secondSelect.addEventListener('click', exchangeTo);
    amountElement.addEventListener('keyup', changeComma);
}



function changeComma(e) {
    if (amountElement.value.includes(',')) {
        let newFilterComma = amountElement.value.replace(',', '.');
        amountElement.value = newFilterComma;
    }
}





function exchangeCurrency() {

    amountElement.value = amountElement.value.replace(/ /g, '');

    if ((amountElement.value.indexOf(',') == -1 || amountElement.value.indexOf('.') == -1) && amountElement.value.match(/[a-z&\/\\_^#@+()$~%'"`!|:*?<>{}-]/g)) {
        currency.alert('Yalnız ədəd tipli dəyişənlər daxil edə bilərsiniz...');

        amountElement.value = '';
        resultField.value = '';

    }

    else {

        if (amountElement.value.indexOf(',') == -1 && amountElement.value.indexOf('.') == -1) {

            let yeni = Number(amountElement.value).toLocaleString().replace(/,/g, ' ');

            let gonderilen = yeni.replace(/ /g, '');

            amountElement.value = yeni;

            currency.changeAmount(gonderilen);
        }

        else {
            if (amountElement.value.indexOf(',')) {
                let yeni = amountElement.value.replace(',', '.')
                currency.changeAmount(yeni)
            }
        }
        currency.exchange()
            .then(result => {

                if (amountElement.value == 0) {
                    resultField.value = ""
                }

                else {
                    resultField.value = result;
                }
            })
    }
}

function exchangeFrom(e) {
    if (e.target.textContent == 'RUB') {

        currency.changeFirstCurrency(e.target.textContent);

        currency.exchange()
            .then(result => {

                if (amountElement.value == 0) {
                    resultField.value = ""
                }
                else {
                    resultField.value = result;
                }
            })
            .catch(err => console.log(err));
    }
    else if (e.target.textContent == 'USD') {

        currency.changeFirstCurrency(e.target.textContent);

        currency.exchange()
            .then(result => {
                if (amountElement.value == 0) {
                    resultField.value = ""
                }
                else {
                    resultField.value = result;
                }
            })
            .catch(err => console.log(err));
    }
    else if (e.target.textContent == 'EUR') {

        currency.changeFirstCurrency(e.target.textContent);

        currency.exchange()
            .then(result => {

                if (amountElement.value == 0) {
                    resultField.value = ""
                }
                else {
                    resultField.value = result;
                }
            })
            .catch(err => console.log(err));

    }
    else if (e.target.textContent == 'GBP') {

        currency.changeFirstCurrency(e.target.textContent);

        currency.exchange()
            .then(result => {

                if (amountElement.value == 0) {
                    resultField.value = ""
                }
                else {
                    resultField.value = result;
                }
            })
            .catch(err => console.log(err));
    }
}

function exchangeTo(e) {
    if (e.target.textContent == 'RUB') {
        currency.changeSecondCurrency(e.target.textContent);

        currency.exchange()
            .then(result => {

                if (amountElement.value == 0) {
                    resultField.value = ""
                }
                else {
                    resultField.value = result;
                }
            })
            .catch(err => console.log(err));


    }
    else if (e.target.textContent == 'USD') {

        currency.changeSecondCurrency(e.target.textContent);

        currency.exchange()
            .then(result => {

                if (amountElement.value == 0) {
                    resultField.value = ""
                }
                else {
                    resultField.value = result;
                }
            })
            .catch(err => console.log(err));

    }
    else if (e.target.textContent == 'EUR') {

        currency.changeSecondCurrency(e.target.textContent);

        currency.exchange()
            .then(result => {
                console.log(result);

                if (amountElement.value == 0) {
                    resultField.value = ""
                }
                else {
                    resultField.value = result;
                }
            })
            .catch(err => console.log(err));

    }
    else if (e.target.textContent == 'GBP') {

        currency.changeSecondCurrency(e.target.textContent);

        currency.exchange()
            .then(result => {
                console.log(result);

                if (amountElement.value == 0) {
                    resultField.value = ""
                }
                else {
                    resultField.value = result;
                }
            })
            .catch(err => console.log(err));
    }

}
