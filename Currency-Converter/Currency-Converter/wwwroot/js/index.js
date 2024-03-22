document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".convert-btn").addEventListener('click', function () {
        var from = document.querySelector("#fromCurrency").value;
        var to = document.querySelector("#toCurrency").value;
        var amount = document.querySelector("#amount").value;

        fetch(`/Currency/Convert/${from}/${to}/${amount}`)
            .then(response => response.text())
            .then(result => {
                console.log('Server response:', result);
                var formattedResult = parseFloat(result).toLocaleString();
                document.querySelector(".rate").textContent = formattedResult;
            })
            .catch(error => console.log(error));
    });

    document.getElementById('amount').addEventListener('input', function (e) {
        e.target.value = e.target.value.replace(/[^\d.,]/g, '').replace(/(\..*)\./g, '$1');
    });
});