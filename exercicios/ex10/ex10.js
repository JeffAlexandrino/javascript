function calcular() {
    var txtv = document.querySelector('input#txtvel');
    var res = document.querySelector('div#res');
    var vel = Number(txtv.value);
    res.innerHTML = `Sua velocidade atual é de ${vel} Km/h`;
}
