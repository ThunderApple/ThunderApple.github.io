var cYear = (new Date()).getFullYear();
document.getElementById("copyYear").innerHTML = cYear;

paypal.Button.render({
    style: {
        size: 'small'
    }
}, '#paypal-button-container');