function carregar() {
    let msg = document.getElementById('msg');
    let img = document.getElementById('imagem');
    let data = new Date();
    let hora = data.getHours();
    msg.innerHTML = `Agora são <strong>${hora} horas!</strong>`
    
    if (hora >= 0 && hora < 12) {
        img.src = './img/manhã.png'
        document.body.style.background = '#ece33d'
    } else if (hora >= 12 && hora <= 18) {
        img.src = './img/tarde.png'
        document.body.style.background = '#eca33d'
    } else {
        img.src = './img/noite.png'
        document.body.style.background = '#313134'
        document.body.style.color = '#AAAAAA'
    }
}