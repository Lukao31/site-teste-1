function minhaFuncao() {
    var x = window.document.getElementById('MeuNavbar');
    if (x.className === 'Navbar') {
        x.className += " responsive";  
    } else {
        x.className = 'Navbar';
    }
}

window.document.addEventListener('DOMContentLoaded', function() {
    var elementos = window.document.getElementsByClassName('texto-animado');
    for (var i = 0; i < elementos.length; i++){
        var texto = elementos[i].getAttribute('data-text');
        elementos[i].innerText = texto;
    }
});





