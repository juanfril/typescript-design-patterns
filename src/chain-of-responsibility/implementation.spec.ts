import { MonkeyHandler, SquirrelHandler, DogHandler } from './implementation';

test('Chain of Responsibility should handle requests appropriately', () => {
  const monkey = new MonkeyHandler();
  const squirrel = new SquirrelHandler();
  const dog = new DogHandler();

  monkey.setNext(squirrel).setNext(dog);

  const requests = ['Nut', 'Banana', 'MeatBall', 'Coffee'];

  const results = requests.map(request => {
    const result = monkey.handle(request);
    return result ? result : `${request} was left untouched.`;
  });

  expect(results).toEqual([
    "Squirrel: I'll eat the Nut.",
    "Monkey: I'll eat the Banana.",
    "Dog: I'll eat the MeatBall.",
    "Coffee was left untouched."
  ]);
});
