import database from '@/assets/database/mhw-omega.json'

function makeArmor () {
  const armors = []
  database.armors.forEach(armorGroup => {
    armorGroup.contains.forEach(item => {
      const jsonItem = JSON.stringify(item)
      const armor = JSON.parse(jsonItem)
      armor.group = armorGroup.name
      armor.resist = armorGroup.resist
      if (armorGroup.skill !== undefined) {
        armor.skill = armorGroup.skill
      }
      armors.push(armor)
    })
  })
  return armors
}

function getSkillMaxLevel (skill) {
  let maxLevel = 0
  database.skills.forEach(item => {
    if (item.name === skill) {
      maxLevel = item.maxLevel
    }
  })
  return maxLevel
}

function makeJewel (slot) {
  const jewels = []
  database.jewels.forEach(item => {
    if (item.slot <= slot) {
      const jsonItem = JSON.stringify(item)
      const jewel = JSON.parse(jsonItem)
      jewel.name = `${jewel.name}【${jewel.slot}】（${jewel.skill}）`
      jewel.maxLevel = getSkillMaxLevel(jewel.skill)
      jewels.push(jewel)
    }
  })
  return jewels
}

function makeCharm () {
  const charms = []
  database.charms.forEach(item => {
    const jsonItem = JSON.stringify(item)
    const charm = JSON.parse(jsonItem)
    charm.name = `${charm.name}（${charm.skills[0].name}${charm.skills[1] ? `&${charm.skills[1].name}` : ''}）`
    charm.skills.forEach(skill => {
      skill.maxLevel = getSkillMaxLevel(skill.name)
    })
    charms.push(charm)
  })
  return charms
}

export { makeArmor, makeJewel, makeCharm, getSkillMaxLevel }
