import { getDiceRollArray, getDicePlaceholderHtml, getPercentage } from './utils.js'


class Character {
    constructor (data) {
    Object.assign(this, data)
    this.maxHealth = this.health

    this.diceHtml = getDicePlaceholderHtml(this.diceCount)

    
}
    setDiceHtml = function() {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceHtml = this.currentDiceScore.map((num) =>
            `<div class="dice">${num}</div>`).join("")
    }

   takeDamage = function (attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((total, num) => total + num)
        this.health -= totalAttackScore
        if (this.health <= 0) {
            this.dead = true
            this.health = 0
        }
    }

    getCharacterInfoHtml () {
      const somess =   this.stats.strength.map((stat) => {
            return `<li>${stat}</li>`
        })
        return `
        <h2>Characteristics</h2>
        <ul>${somess.join('')}
        
        </ul>`;
    }


    getHealthBarHtml = function () {
        const percent = getPercentage(this.health, this.maxHealth)
        return `<div class="health-bar-outer">
                    <div class="health-bar-inner ${percent < 26 ? "danger" : ""}" 
                            style="width:${percent}%;">
                    </div>
                </div>`  
    }
    

     generateCardHtml () {
        console.log("heasd")
    return `<div class="extra-info" id="modal">
		<div class="close-modal-btn-container">
			<span class="info-close-btn" id="modal-close-btn" disabled>X</span>
		</div>
		<div class="extra-inner" id="extra-inner">
            <img class="img-lotr" src=${this.infoImg} alt=${this.altInfo} />
			<h2>${this.name}</h2>
			<p class="modal-text" id="modal-text">${this.bio}</p>
				</div>
		</div>`
} 

    getCharacterHtml = function () {
        const { elementId, name, avatar, health, diceCount, diceHtml } = this
        const healthBar = this.getHealthBarHtml()
        const characterInfo = this.getCharacterInfoHtml()
        return `
        <div class="character-card" id="${name}">
        <h4 class="name"> ${name} </h4>
        <img class="avatar" src="${avatar}" />
        ${healthBar}
        <div class="health">health: <b> ${health} </b></div>
        <div class="dice-container">
        ${diceHtml}
        </div>
        </div>
        
            `
    }
}

export default Character