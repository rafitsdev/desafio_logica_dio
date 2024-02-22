// Nome e XP do Campeão
const championName = "Draven Ironfist"
let championXP = 5468
let championLevel = "Ainda sem nível!"

// estrutura de repetição
if (championXP <= 1000) {
  championLevel = "Ferro"
} else if (championXP >= 1001 && championXP <= 2000) {
  championLevel = "Bronze"
} else if (championXP >= 2001 && championXP <= 5000) {
  championLevel = "Prata"
} else if (championXP >= 5001 && championXP <= 7000) {
  championLevel = "Ouro"
} else if (championXP >= 7001 && championXP <= 8000) {
  championLevel = "Platina"
} else if (championXP >= 8001 && championXP <= 9000) {
  championLevel = "Ascendente"
} else if (championXP >= 9001 && championXP <= 10000) {
  championLevel = "Imortal"
} else if (championXP >= 10001) {
  championLevel = "Radiante"
}

console.log("O Herói de nome " + championName + " está no nível " + championLevel)


// OU
// declarando os elos em um objeto
// obs: apenas troquei os limites de xp dos elos para serem mais "realistas", pois pensei que normalmente iniciamos um *novo elo* no número cheio
const elosPerXP = {
  "Ferro": { min: 0, max: 999 },
  "Bronze": { min: 1000, max: 1999 },
  "Prata": { min: 2000, max: 4999 },
  "Ouro": { min: 5000, max: 6999 },
  "PLatina": { min: 7000, max: 7999 },
  "Ascendente": { min: 8000, max: 8999 },
  "Imortal": { min: 9000, max: 9999 },
  "Radiante": { min: 10000, max: Infinity }
}

// Infos do jogador
const playerName = "Ragnor Frostfire"
let playerExp = 15000

// Checagem de repetição com a estrutura da decisão
for (let title in elosPerXP) {
  const elo = elosPerXP[title]
  if (playerExp >= elo.min && playerExp <= elo.max) {
    console.log("O Herói de nome " + playerName + " está no nível " + title)
    break
  }
}
