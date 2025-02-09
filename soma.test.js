const soma = require('./soma')

test('A função soma deve retornar 5000000000 ao somar 2000000000 e 3000000000', ()=>{
    expect(soma(2000000000,3000000000)).toBe(5000000000)
})

test('A função soma deve retornar 2000000000 ao somar 1000000000 e 1000000000', () =>{
    expect(soma(1000000000,1000000000)).toBe(2000000000)
})