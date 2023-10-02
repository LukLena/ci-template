export function checkHeath({health}){
    if (health <= 14){
        return 'critical'
    } 
    else if (health <= 49 && health >= 15 ){
        return 'wounded'
    }
    else if (health >= 50){
        return 'healthy'
    }
}


