var vel = Math.floor(Math.random() * 100) + 1; //Número aleatorio entre 1 e 100
console.log(`A velocidade do seu carro é de ${vel}KM/h`)
if (vel >= 60) { //Condição simples
    console.log('Você ultrapassou a velocidade permitida. Multado!')
}
console.log('Dirija sempre com cuidado.')
