function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique novamente bobão!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade <= 15) {
                //crianca
                img.setAttribute('src', 'imgs/bebeH.png')
            } else if ( idade < 25) {
                //jovem
                img.setAttribute('src', 'imgs/jovemH.png')
            } else if ( idade < 40) {
                //ADULTO
                img.setAttribute('src', 'imgs/veioH.png')
            } else { 
                // Véio
                img.setAttribute('src', 'imgs/idosoH.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade <= 15) {
                //crianca
                img.setAttribute('src', 'imgs/bebeF.png')
            } else if ( idade < 25) {
                //jovem
                img.setAttribute('src', 'imgs/jovemF.png')
            } else if ( idade < 40) {
                //ADULTO
                img.setAttribute('src', 'imgs/veiaF.png')
            } else { 
                // Véio
                img.setAttribute('src', 'imgs/idosoF.png')
            }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
    }
}