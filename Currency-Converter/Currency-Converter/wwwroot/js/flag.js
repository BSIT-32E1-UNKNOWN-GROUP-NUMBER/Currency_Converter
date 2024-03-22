
$(function() {
    function formatState (state) {
        if (!state.id) { return state.text; }
        var $state = $(
            '<span class="' + state.element.value.toLowerCase() + ' img-flag">' + state.text + '</span>'
        );
        return $state;
    };

    $('#fromCurrency, #toCurrency').select2({
        templateResult: formatState,
        templateSelection: formatState
    });
});