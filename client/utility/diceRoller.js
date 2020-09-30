function rollTheDice(numOfDice, typeOfDice, bonus = 0) {
  let answer = 0
  let dieVal = Number(typeOfDice.slice(1))
  const rollsArray = []

  for (let i = 0; i < numOfDice; i++) {
    const roll = Math.ceil(Math.random() * dieVal)
    answer += roll
    rollsArray.push(roll)
  }

  answer += bonus

  return {
    rollsArray: rollsArray,
    answer: answer,
    bonus: bonus
  }
}

export default rollTheDice
