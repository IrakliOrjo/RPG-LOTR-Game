const characterData = {
    hero: {
        name: "Gandalf",
        avatar: "images/gandalfavatar.jpg",
        infoImg: "images/gandalf.jpg",
        altInfo: "gandalf from Lord of the rings",
        health: 60,
        diceCount: 3,
        currentDiceScore: [],
        bio: `The wisest of the Maiar, Gandalf was created by Ilúvatar before the Music of the Ainur. At the beginning of Time, he was amongst the Ainur who entered into Eä. In his "youth" he was known as Olórin and lived in Lórien. Yet his ways often took him to Nienna, from whom he learned pity and patience. Gandalf then began his sojourn in Middle-earth, going about as a wanderer and counsellor. Unlike Saruman, Gandalf did not take up a single permanent residence. Gandalf never went to the east[10] and apparently restricted his activities to the Westlands of Middle-earth, where the remnants of the Dúnedain and the Eldar remained to oppose Sauron. `,
        stats: {
            strength: ["Grappled the Balrog Durin's Bane.", " When pressed into long battles, Gandalf has shown to be capable of fighting for multiple days straight without tiring.", "Fast enough to defend himself from armies of orcs surrounding him.", "Could keep out Sauron's full power for 22 seconds","Has magical abilities"]
        }
    },
    orc: {
        name: "Moria Orc",
        avatar: "images/moriaavatar.jpeg",
        infoImg: "images/moriaorc.jpg",
        health: 30,
        altInfo: "orc from moria lord of the rings",
        diceCount: 1,
        currentDiceScore: [],
        bio: `Moria Goblins or Moria Orcs were a sub-breed of Misty Mountain Orc that took over the fallen Dwarf kingdom of Moria after the Dwarves were driven out. They became small and shrivelled up over time and became known as Goblins due to their similarities to Goblins of the Misty Mountains.The Orcs of the Misty Mountains were tribes of Orcs settled in the tunnels in or under the mountains. They served Sauron since early on, guarding the passes and troubling the folk of Eriador. These Orcs were also responsible for the death of Isildur and the loss of the One Ring. Later on, though they harassed the peoples and regions around them on their own for a time, their bond to Sauron remained strong and even though he commanded from the far main dominions of Dol Guldur and Mordor they still carried out his will, occupying Moria and barring the paths through the mountains.`,
        stats: {
            strength: ["Bloodthirsty", "Are strong in groups.", "Can't bear sunlight","Hates elves", "Can see in the darkness", "Can smell human flesh from miles away"]
        }
    },
    demon: {
        name: "Nazgul",
        avatar: "images/nazgulimg.webp",
        health: 25,
        infoImg: "images/nazgul.jpg",
        diceCount: 2,
        currentDiceScore: [],
        altInfo: "nazgul from  lord of the rings",
        bio: `The Nazgûl (Black Speech for "Ringwraiths") or Úlairi (Quenya[2]), also known as the Black Riders or simply The Nine, were the dreaded ring-servants of the Dark Lord Sauron in Middle-earth throughout the Second and Third Ages, who in the later years of the Third Age dwelt in Minas Morgul and Dol Guldur.The bearers of the rings gained great wealth and prestige and became "mighty in their day, kings, sorcerers, and warriors of old". Although the rings prolonged their lives so that they seemed to have unending lives, life became unendurable for them. The rings turned them invisible and enabled them to see things of the Unseen. But over time depending on their native strength and their initial good or evil will they succumbed to the domination of their rings and the rule of One Ring that was worn by Sauron and their bodily forms faded until they became permanently invisible and turned into wraiths`,
        stats: {
            strength: ["One could withstand them when gathered together under their terrible captain, the Lord of Morgul.", "Equipped with Morgul blade that poisons victims","Can smell fear", "Can see in the darkness", "Very hard to spot at night"]
        }
    },
    goblin: {
        name: "Witch King",
        avatar: "images/angmar.jpg",
        altInfo: "witch king of angmar",
        infoImg: "images/witchking.jpg",
        bio:`The Witch-king of Angmar, also known as the Lord of the Nazgûl, was the leader of the Nazgûl (Ringwraiths) and Sauron's second-in-command during the Second and Third Ages of Middle-earth.
His precise identity is unknown, but he could be one of three noble lords of Númenor, who were corrupted by the Nine Rings of Power and thus became the undying Wraiths at the servitude of Sauron. After Sauron's defeat by the Last Alliance, the Witch-king eventually reappeared in the Third Age's 14th century to found the evil realm of Angmar, where he gained his infamous epithet and ruled for almost seven centuries until the three successor states of Arnor were finally conquered.`,
        health: 20,
        stats: {
            strength: ["Most powerful of Sauron's servants", "Terrifying warrior and a cunning strategist", "Extremely menacing, ruthless and emotionless", "Possessing utterly no sense of sympathy, mercy, joy, or pleasure", "Extremely intelligent, having vast knowledge of ancient magic"]
        },
        diceCount: 3,
        currentDiceScore: []
    }
}

export default characterData