const pl = require('..')

const letters = ['й', 'я', 'ев']

test('"21 комментарий" resolves the right way', () => {
  const letter = pl('21', letters)
  return expect(letter).toEqual('й')
})

test('"0.12 комментария" resolves the right way', () => {
  const letter = pl(0.12, letters)
  return expect(letter).toEqual('я')
})

test('"-15.21 комментариев" resolves the right way', () => {
  const letter = pl(-15.21, letters)
  return expect(letter).toEqual('ев')
})

test('"11.0 комментариев" resolves the right way', () => {
  const letter = pl(11.0, letters)
  return expect(letter).toEqual('ев')
})

test('"-52 комментария" resolves the right way', () => {
  const letter = pl(-52, letters)
  return expect(letter).toEqual('я')
})

test('"-6 комментариев" resolves the right way', () => {
  const letter = pl(-6, letters)
  return expect(letter).toEqual('ев')
})

test('"1 комментарий" resolves the right way', () => {
  const letter = pl(1, letters)
  return expect(letter).toEqual('й')
})

test('"55 комментариев" resolves the right way', () => {
  const letter = pl(55, letters)
  return expect(letter).toEqual('ев')
})
