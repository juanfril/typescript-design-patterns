import { ConcreteFactory1, ConcreteFactory2, AbstractProductA, AbstractProductB } from './implementation';

function clientCode(factory: ConcreteFactory1 | ConcreteFactory2) {
  const productA = factory.createProductA();
  const productB = factory.createProductB();

  console.log(productB.usefulFunctionB());
  console.log(productB.anotherUsefulFunctionB(productA));
}

test('ConcreteFactory1 should create ConcreteProductA1 and ConcreteProductB1', () => {
  const factory = new ConcreteFactory1();
  const productA = factory.createProductA();
  const productB = factory.createProductB();

  expect(productA.usefulFunctionA()).toBe('The result of the product A1.');
  expect(productB.usefulFunctionB()).toBe('The result of the product B1.');
  expect(productB.anotherUsefulFunctionB(productA)).toBe('The result of the B1 collaborating with the (The result of the product A1.)');
});

test('ConcreteFactory2 should create ConcreteProductA2 and ConcreteProductB2', () => {
  const factory = new ConcreteFactory2();
  const productA = factory.createProductA();
  const productB = factory.createProductB();

  expect(productA.usefulFunctionA()).toBe('The result of the product A2.');
  expect(productB.usefulFunctionB()).toBe('The result of the product B2.');
  expect(productB.anotherUsefulFunctionB(productA)).toBe('The result of the B2 collaborating with the (The result of the product A2.)');
});
