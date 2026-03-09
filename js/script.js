//Mapeamento dos componentes de tela
const tabuleiro = document.querySelector("#tabuleiro")
const mosca = document.querySelector("#mosca")
const tempo = document.querySelector("#tempo")
const acertos = document.querySelector("#acertos")
const root = document.documentElement

//Variáveis de início
var qtAcertos = 0, minutos = 2, segundos = 0, min = 5, max = 95, velocidade = 500 

//Evento de clique sobre a mosca
mosca.addEventListener("click", ()=>{
    qtAcertos++
    acertos.innerHTML = qtAcertos

    velocidade-=10

    root.style.setProperty("--velocidade", velocidade/1000 + "s")
})

//Temporizador para movimento da mosca
setInterval(()=>{
    let vertical = Math.floor (Math.random() * (max - min + 1)) + min
    let horizontal = Math.floor(Math.random() * (max - min + 1 )) + min

    root.style.setProperty("--vertical", vertical + "%")
    root.style.setProperty("--horizontal", horizontal + "%")

    console.log("Y = " + vertical)
    console.log("X = " + horizontal)
    console.log("Velocidade = " + velocidade)

}, velocidade);