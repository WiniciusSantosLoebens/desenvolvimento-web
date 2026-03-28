const valorConta = 100
const percentualGorjeta = 15

const valorGorjeta = valorConta * (percentualGorjeta / 100)
const valorTotal = valorConta + valorGorjeta

console.log(`Valor da Conta: R$${valorConta.toFixed(2)}`)
console.log(`Gorjeta (${percentualGorjeta}%): R$${valorGorjeta.toFixed(2)}`)
console.log(`Total a pagar: R$${valorTotal.toFixed(2)}`)