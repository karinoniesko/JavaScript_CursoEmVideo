function verificar() {
    var data = new Date()
    var anohj = data.getFullYear()
    var txtano = document.querySelector('input#txtano')
    var ano = Number(txtano.value)
    var res = document.querySelector('div#res')
    if (ano.length == 0 || ano > anohj) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var sex = document.getElementsByName('radsex')
        var idade = anohj - ano
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 14) {
                //criança
                img.setAttribute('src', 'assets/2criancam.png')
            } else if (idade < 30) {
                //jovem
                img.setAttribute('src', 'assets/4jovemm.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'assets/6adultom.png')
            } else {
                //idoso
                img.setAttribute('src', 'assets/8idosom.png')
            }
        } else if (sex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 14) {
                //criança
                img.setAttribute('src', 'assets/1criancaf.png')
            } else if (idade < 30) {
                //jovem
                img.setAttribute('src', 'assets/3jovemf.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'assets/5adultof.png')
            } else {
                //idoso
                img.setAttribute('src', 'assets/7idosof.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} de ${idade} anos.</p>`
        res.appendChild(img)
    }
}