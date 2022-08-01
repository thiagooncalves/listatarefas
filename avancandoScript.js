function carregar() {
    let msg = document.getElementById('msg');
    let img = document.getElementById('imagem');
    let data = new Date();
    let hora = data.getHours();
    // let hora = 19
    msg.innerHTML = `Agora são <strong>${hora} horas!</strong>`
    
    if (hora >= 0 && hora < 12) {
        img.src = './img/manhã.png'
        document.body.style.background = '#ece33d'
        return
    }
    
    if (hora >= 12 && hora <= 18) {
        img.src = './img/tarde.png'
        document.body.style.background = '#eca33d'
        return
    }
        img.src = './img/noite.png'
        document.body.style.background = '#313134'
        document.body.style.color = '#AAAAAA'
}