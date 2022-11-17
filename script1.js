const dropList = document.querySelectorAll(".countrySelect");
const fromCurrency = document.querySelector(".from select"),
toCurrency = document.querySelector(".to select"),
getButton = document.querySelectorAll("select");

const amountElement = document.querySelectorAll('.amountt');

for (let i = 0; i < dropList.length; i++) {
    for(let currency_code in country_list){
        let selected = i == 0 ? currency_code == "USD" ? "selected" : "" : currency_code == "AZN" ? "selected" : "";
        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
    }
    dropList[i].addEventListener("change", e =>{
        loadFlag(e.target);
    });
}

function loadFlag(element){
    for(let code in country_list){
        if(code == element.value){ 
            let imgTag = element.parentElement.querySelector("img"); 
            imgTag.src = `https://flagcdn.com/48x36/${country_list[code].toLowerCase()}.png`;
        }
    }
}

amountElement.forEach(item =>{
    if(item){
        item.addEventListener('keyup', changeComma);
        function changeComma(e) {
            if (item.value.includes(',')) {
                let newFilterComma = item.value.replace(',', '.');
                item.value = newFilterComma;
            }
        }

        item.addEventListener('keyup', callVal);
        function callVal(e){
        e.preventDefault();
        getExchangeRate();
    }
    }
})


getButton.forEach(element => {
    element.addEventListener("click", e =>{
        e.preventDefault(); 
        getExchangeRate();
    })
});

window.addEventListener("load", ()=>{
    getExchangeRate();
});


let yourApiKey = '19ac567f90f48666e5efff7e';
function getExchangeRate(){
    const amount = document.querySelector(".input-from");
    const exchangeRateTxt = document.querySelector(".paragraph-to");
    const exchangeRateTxt2 = document.querySelector(".paragraph-from");
    const toInput = document.querySelector('.input-to');
    let amountVal = amount.value;
    if(amountVal == "" || amountVal == "0"){
        amount.value = "1";
        amountVal = 1;
    }
    toInput.value = "Hesablanir";
    exchangeRateTxt.innerHTML = "Getting exchange rate...";
    exchangeRateTxt2.innerHTML = "Getting exchange rate...";
    let url = `https://v6.exchangerate-api.com/v6/${yourApiKey}/latest/${fromCurrency.value}`;
    
    fetch(url).then(response => response.json()).then(result =>{
        let exchangeRate = result.conversion_rates[toCurrency.value]; 
        let totalExRate = (amountVal * exchangeRate).toFixed(2); 
        let totalExRate2 = (1 * exchangeRate).toFixed(2); 
        exchangeRateTxt.innerHTML = `${1} ${fromCurrency.value} = ${totalExRate2} ${toCurrency.value}`;
        exchangeRateTxt2.innerHTML = `${1} ${fromCurrency.value} = ${totalExRate2} ${toCurrency.value}`;
        toInput.value = totalExRate
    }).catch(() =>{ 
        exchangeRateTxt.innerHTML = "Something went wrong";
        exchangeRateTxt2.innerHTML = "Something went wrong";
    });
}