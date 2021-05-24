const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

const damageDragon = (dragao) => {
    let min = 15;
    let max = dragon.strength;
    let danoDragao = Math.floor(Math.random() * (max - min + 1) + min);
    return danoDragao; 
}

const damageWarrior = (guerreiro) => {
    let min = warrior.strength;
    let max = min * 2;
    let danoGuerreiro = Math.floor(Math.random() * (max - min + 1) + min);
    return danoGuerreiro; 
}

const damageMage = (mago) => {
    let min = mage.intelligence;
    let max = min * 2;
    let dano = Math.floor(Math.random() * (max - min + 1) + min);
    let manaMage = mage.mana;

    return { damage : (manaMage < 15) ? 'Não possui mana suficiente' : `${dano}`, mana : `${manaMage}`};
}

const gameActions = {
    // Crie as HOFs neste objeto.
  };

// Crie a primeira HOF que compõe o objeto gameActions . 
// Ela será a função que simula o turno do personagem warrior. 
// Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior 
// e atualizará os healthPoints do monstro dragon . 
// Além disto ela também deve atualizar o valor da chave damage do warrior .

