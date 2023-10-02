import { checkHeath } from '../index.js'
test('Здоровье более 50 - зелёный, healthy', () => {
    const status = 'healthy'
    const result = checkHeath({name: 'Маг', health: 90})
    expect(result).toBe(status)
})
test('Здоровье от 50 и до 15 - жёлтый,wounded', () => {
    const status = 'wounded'
    const result = checkHeath({name: 'Маг', health: 34})
    expect(result).toBe(status)
})
test('Менее 15 - красный, critical', () => {
    const status = 'critical'
    const result = checkHeath({name: 'Маг', health: 14})
    expect(result).toBe(status)
})
test('если 15, то wounded', () => {
    const status = 'wounded'
    const result = checkHeath({name: 'Маг', health: 15})
    expect(result).toBe(status)
})
test('если 50, то healthy', () => {
    const status = 'healthy'
    const result = checkHeath({name: 'Маг', health: 50})
    expect(result).toBe(status)
})
