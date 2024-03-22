$(document).ready(function () {
    var currencySymbols = {
        "PHP": "₱",
        "NGN": "₦",
        "EUR": "€",
        "GBP": "£",
        "AUD": "$",
        "CAD": "$",
        "USD": "$"
    };

    $("#convertButton").click(function (event) {
        event.preventDefault(); 
        var to = $("#toCurrency").val();
        var symbol = currencySymbols[to];
        $("#resultCurrencySymbol").text(symbol);
    });
});

