const mult = require('./mult')

test('A função mult deve retornar -4 ao multplicar -2 e 2', ()=>{
    expect(mult(-2,2)).toBe(-4)
})
