function getCurrencyExchangeRates () {
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();
xhr.addEventListener('readystatechange',() => {if (xhr.readyState === xhr.DONE) {
document.getElementById("loader").classList.remove("loader_active");
let currencyList = JSON.parse(xhr.responseText).response.Valute;
let currencyCode;
let currencyName;
let currencyValue;
for (let key in currencyList) {
  console.log(currencyList[key]);
  currencyCode = currencyList[key].CharCode;
  currencyName = currencyList[key].Name;
  currencyValue = currencyList[key].Value;
  let currencyEl = document.createElement("div");
  currencyEl.classList.add("item");
  currencyEl.innerHTML = `
    <div class="item__name">${currencyName}&nbsp</div>
    <div class="item__code">&nbsp${currencyCode}&nbsp</div
    <div class="item__value">&nbsp${currencyValue}&nbsp</div>
    <div class="item__currency">&nbspруб.</div>
  `
  document.getElementById("items").append(currencyEl);
}
};
});
};

getCurrencyExchangeRates ();