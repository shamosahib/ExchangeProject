const currenciesFrom = document.querySelectorAll('.currencies')[0];
const currenciesTo = document.querySelectorAll('.currencies')[1];

let buttonsLeft = document.querySelectorAll('#from button');
let buttonsRight = document.querySelectorAll('#to button');

change = (e) => {

    if (e.target.textContent == 'RUB') {

        buttonsLeft.forEach((item) => {
            item.style = 'background: #fff; color: #C6C6C6'
        })
        e.target.style = "background: #833AE0; color: #fff";

    }

    else if (e.target.textContent == 'USD') {

        buttonsLeft.forEach((item) => {
            item.style = 'background: #fff; color: #C6C6C6'
        })

        e.target.style = "background: #833AE0; color: #fff";

        let choosen = document.querySelector('#choosen')

    }
    else if (e.target.textContent == 'EUR') {

        buttonsLeft.forEach((item) => {
            item.style = 'background: #fff; color: #C6C6C6'
        })

        e.target.style = "background: #833AE0; color: #fff";
    }

    else if (e.target.textContent == 'GBP') {

        buttonsLeft.forEach((item) => {
            item.style = 'background: #fff; color: #C6C6C6'
        })

        e.target.style = "background: #833AE0; color: #fff";
    }
}


change2 = (e) => {

    if (e.target.textContent == 'RUB') {

        buttonsRight.forEach((item) => {
            item.style = 'background: #fff; color: #C6C6C6'
        })
        e.target.style = "background: #833AE0; color: #fff";
    }

    else if (e.target.textContent == 'USD') {

        buttonsRight.forEach((item) => {
            item.style = 'background: #fff; color: #C6C6C6'
        })

        e.target.style = "background: #833AE0; color: #fff";


    }
    else if (e.target.textContent == 'EUR') {

        buttonsRight.forEach((item) => {
            item.style = 'background: #fff; color: #C6C6C6'
        })

        e.target.style = "background: #833AE0; color: #fff";

    }

    else if (e.target.textContent == 'GBP') {

        buttonsRight.forEach((item) => {
            item.style = 'background: #fff; color: #C6C6C6'
        })

        e.target.style = "background: #833AE0; color: #fff";

    }
}

currenciesFrom.addEventListener('click', change);
currenciesTo.addEventListener('click', change2);

