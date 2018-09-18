function make_armor(data) {
    const armors = [];
    data.armors.forEach(armorGroup => {
        armorGroup.contains.forEach(item => {
            const jsonItem = JSON.stringify(item);
            const armor = JSON.parse(jsonItem);
            armor.group = armorGroup.name;
            armor.resist = armorGroup.resist;
            if (armorGroup.skill !== undefined) {
                armor.skill = armorGroup.skill;
            }
            armors.push(armor);
        })
    });
    return armors;
}

export default make_armor;