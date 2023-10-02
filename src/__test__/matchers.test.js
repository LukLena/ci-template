import {matchers} from '../players.js'
test ('отсортировать по уровню здоровья игроков', ()=> {
    let allPlayers = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
      ]
    const received = matchers(allPlayers)
    const expected = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
      ]
    expect(received).toEqual(expected)
})