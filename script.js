let idade = 19
let humano = true
let niver = "janeiro"

if(idade > 18){
    console.log('Você é maior de idade, já pode tirar carta.')
}
else{
    console.log('Você ainda não pode começar as aulas de direção.')
}


if(idade >= 18 && humano == true){
    console.log('Já está na hora de tirar carta!')
}

if(niver == "janeiro" || "dezembro"){
    console.log('Você faz aniversário no verão.')
}
else{
    console.log('Você não faz aniversário no verão')
}

console.log('Seu nome começa com a letra R?')
let resposta = "sim"
if(resposta == "sim"){
    console.log('Parabéns, você está no mesmo grupo que a Rihanna.')
}
else{
    console.log('Não desanime, tem outras artistas maravilhosas que o nome não começa com R...')
}

console.log('Seu nome tem mais de 6 letras ou começa com a letra E?')
let novaResposta = "sim"
if(novaResposta == "sim"){
    console.log('Legal, seu nome é grande e/ou começa com a letra E.')
}