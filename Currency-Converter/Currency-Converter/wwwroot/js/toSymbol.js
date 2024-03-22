document.addEventListener("DOMContentLoaded", function() {
    var currencySymbols = {
        "PHP": "₱",
        "NGN": "₦",
        "EUR": "€",
        "GBP": "£",
        "AUD": "$",
        "CAD": "$",
        "USD": "$"
    };

    document.querySelector("#convertButton").addEventListener('click', function (event) {
        event.preventDefault(); 
        var to = document.querySelector("#toCurrency").value;
        var symbol = currencySymbols[to];
        document.querySelector("#resultCurrencySymbol").textContent = symbol;
    });
});