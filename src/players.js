export function matchers(players){
    return players.sort((a,b) => a.health - b.health)
}