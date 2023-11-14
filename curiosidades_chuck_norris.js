var curiosidades_chuck_norris = [
    {titulo: "Zelda", curiosidade: "Chuck Norris é fã do jogo Zelda, porque você acha que aquele idiota do Link ainda não morreu?"},
    {titulo: "Newton", curiosidade: "Isaac Newton descobriu a lei da gravidade, mais quem inventou foi Chuck Norris (men... outro que Chuck matou por duvidar dele, pois Chuck nunca mente)"},
    {titulo: "Hello Kitty", curiosidade: "Hello Kitty um dia mostrou a língua pra Chuck Norris... Um dia..."},
    {titulo: "Pelada", curiosidade: "Em uma pelada, Chuck Norris foi cobrar uma falta e o golero gritou: 'CHUTA COMO HOMEM!!'. Nascia assim, a bola de futebol americano."},
    {titulo: "Banho", curiosidade: "Quando Chuck Norris toma banho, ele faz malabarismo com o sabonete, banhado em óleo e manteiga Tia Amélia, e por incrível que pareça, talvez por medo da morte ou por amor a sua esposa e filhos, o sabonete nunca cai no chão."},
    {titulo: "Artigo ", curiosidade: "Uma vez Chuck Norris tentou escrever um artigo na Desciclopédia. Ao apertar a primeira letra, tudo explodiu num raio de 20 km. A partir daí, Chuck Norris marcou uma consulta com o professor Xavier para aprender a controlar sua força."},
    {titulo: "Bomba ", curiosidade: "A bomba de Hiroshima equivale a 1/99999999999... da força de Chuck Norris subtraida pela força da explosão do Big Bang, o que equivale à metade de 1/4 de um grão de areia batendo em seu rosto perto do verdadeiro poder de Chuck."},
    {titulo: "Big Bang", curiosidade: "Descobriram a força do Big Bang! 0,00000000000000000000000001 rhkcn (Roundhouse Kick) de Chuck Norris."},
    {titulo: "Horas", curiosidade: "Chuck Norris não vê as horas: Ele decide que horas são."},
    {titulo: "Muralha", curiosidade: "A Grande Muralha da China foi originalmente construída pra impedir a entrada de Chuck Norris naquele país. Ela falhou miseravelmente."}
]
var tamanho = curiosidades_chuck_norris.length
var numero_sorteado = Math.floor(Math.random() * tamanho)

console.log("CURIOSIDADES SOBRE CHUCK NORRIS")
console.log("--------------------------------")
console.log("Titulo:" + " "+curiosidades_chuck_norris[numero_sorteado].titulo)
console.log("")
console.log("Curiosidade:"+ " "+ curiosidades_chuck_norris[numero_sorteado].curiosidade)
console.log("--------------------------------")