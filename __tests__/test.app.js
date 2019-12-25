import Character from '../src/Character';


test('Повышение уровня', () => {
  const expected = {
    name: 'Fro',
    health: 100,
    level: 2,
    attack: 48,
    defence: 12,
  };
  const character = new Character('Fro');
  character.levelUp();


  expect(character).toEqual(expected);
});

test('Уровень жизни ниже 0', () => {
  const character = new Character('Fro');
  character.health = 0;

  expect(() => character.levelUp()).toThrow();
});
