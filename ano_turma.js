function redirecionarPagina(){
    const paginaSelecionada = document.getElementById('seletorPagina').value;

    if (paginaSelecionada) {
        window.location.href = paginaSelecionada;
    } else {
        alert("Selecione uma página");
    }
}
