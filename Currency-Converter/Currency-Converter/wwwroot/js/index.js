$(function() {
    $(".convert-btn").on('click', function () {
        var from = $("#fromCurrency").val();
        var to = $("#toCurrency").val();
        var amount = $("#amount").val();

        $.ajax({
            url: `/Currency/Convert/${from}/${to}/${amount}`,
            type: 'GET',
            success: function (result) {
                var formattedResult = parseFloat(result).toLocaleString();
                $(".rate").text(formattedResult);
            },
            error: function (error) {
                console.log(error);
            }
        });
    });

    document.getElementById('amount').addEventListener('input', function (e) {
        e.target.value = e.target.value.replace(/[^\d.,]/g, '').replace(/(\..*)\./g, '$1');
    });
});