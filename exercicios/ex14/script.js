function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são  ${hora} horas.`
if (hora >= 0 && hora < 12) {
    // BOM DIA
    img.src = 'imgs/Diaa.jpg'
    document.body.style.background = '#ADD8E6'
} else if (hora > 12 &&  hora < 18) {
    // BOA TARDE 
    img.src = 'imgs/ttarde.png'
    document.body.style.background = '#e2cd9f'
} else {
    // BOA NOITE
    img.src = 'imgs/nnoite.png'
    document.body.style.background = '#191970'
}

}