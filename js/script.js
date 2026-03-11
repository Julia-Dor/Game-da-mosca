//Mapeamento dos componentes de tela
const tabuleiro = document.querySelector("#tabuleiro")
const mosca = document.querySelector("#mosca")
const tempo = document.querySelector("#tempo")
const acertos = document.querySelector("#acertos")
const btnIniciar = document.querySelector("#btn-iniciar")
const telaInicial = document.querySelector("aside")
const telaJogo = document.querySelector("main")
const gameOver = document.querySelector("#game-over")
const root = document.documentElement

//Variáveis de início
var qtAcertos = 0, minutos = 2, segundos = 0, min = 5, max = 95, velocidade = 600, movimento, temporizador

//Temporizador
function timer() {
    segundos--
    if( segundos == -1 ) {
        minutos--
        segundos = 59
    }

    tempo.innerHTML = (segundos < 10)
            ? minutos + ":0" + segundos
            : minutos + ":" + segundos
    if( minutos == 0 && segundos == 0 ) {
        gameOver.style.display = "block"
        clearInterval(temporizador)
        clearInterval(movimento)
    }
}

//Evento de clique sobre a mosca
mosca.addEventListener("click", ()=>{
    mosca.style.pointerEvents = "none"
    mosca.src = "../img/moscaEsmagada.png"

    setTimeout(()=>{
        mosca.style.pointerEvents = "all"
        mosca.src = "../img/mosca.png"
    }, 1500)

    qtAcertos++
    acertos.innerHTML = qtAcertos

    velocidade-=20
    clearInterval(movimento)
    movimento = setInterval(moveMosca, velocidade)

    root.style.setProperty("--velocidade", velocidade/1000 + "s")
})

// evento para iniciar o jogo 
btnIniciar.addEventListener("click", ()=> {
    telaInicial.style.display = "none"
    telaJogo.style.display = "block"
    //Temporizador para movimento da mosca
    movimento = setInterval(moveMosca, velocidade);

    //Inicio do timer
    temporizador = setInterval(timer, 1000)
})


function moveMosca() {
    let vertical = Math.floor (Math.random() * (max - min + 1)) + min
    let horizontal = Math.floor(Math.random() * (max - min + 1 )) + min

    root.style.setProperty("--vertical", vertical + "%")
    root.style.setProperty("--horizontal", horizontal + "%")

    console.log("Y = " + vertical)
    console.log("X = " + horizontal)
    console.log("Velocidade = " + velocidade)
}