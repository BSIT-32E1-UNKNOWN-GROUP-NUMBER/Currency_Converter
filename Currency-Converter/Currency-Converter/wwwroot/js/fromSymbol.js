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

    $("#fromCurrency").change(function () {
        var from = $(this).val();
        var symbol = currencySymbols[from];
        $("#currencySymbol").text(symbol);
    });

    $("#fromCurrency").change();
});