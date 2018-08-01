import checkObject from '../index.js';

it('Test 1', () => {
  const toCheck = checkObject({ a: { b: [0, 2, 3] } }, 'a.b.1', null);
  expect(toCheck).toEqual(2);
});

it('Test 2', () => {
  const toCheck = checkObject({ a: { b: [0, 2, 3] } }, 'a.b.0', null);
  expect(toCheck).toEqual(0);
});

it('Test 3', () => {
  const toCheck = checkObject({ a: { b: { c: 10 } } }, 'a.b.c', null);
  expect(toCheck).toEqual(10);
});

it('Test 4', () => {
  const toCheck = checkObject(
    {
      a: {
        b: {
          c: () => {}
        },
        prova: 'yeah'
      }
    },
    'a.prova',
    null
  );
  const toCheck2 = checkObject(
    {
      a: {
        b: {
          c: () => {}
        },
        prova: 'yeah'
      }
    },
    ['a', 'prova', 0],
    null
  );
  expect(toCheck2).toEqual('y');
});
