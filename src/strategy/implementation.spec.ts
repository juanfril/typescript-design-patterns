import {
  Context,
  ConcreteStrategyA,
  ConcreteStrategyB,
} from './implementation';

test('Strategy pattern should allow swapping algorithms', () => {
  const context = new Context(new ConcreteStrategyA());

  // Capture console logs
  console.log = jest.fn();

  const resultA = context.doSomeBusinessLogic();
  expect(resultA).toEqual(['a', 'b', 'c', 'd', 'e']);
  expect(console.log).toHaveBeenCalledWith('a,b,c,d,e');

  context.setStrategy(new ConcreteStrategyB());
  const resultB = context.doSomeBusinessLogic();
  expect(resultB).toEqual(['e', 'd', 'c', 'b', 'a']);
  expect(console.log).toHaveBeenCalledWith('e,d,c,b,a');
});
