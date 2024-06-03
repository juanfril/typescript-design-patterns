import { Component1, Component2, ConcreteMediator } from './implementation';

test('Mediator pattern should facilitate communication between components', () => {
  const component1 = new Component1();
  const component2 = new Component2();
  new ConcreteMediator(component1, component2);

  // Capture console logs
  console.log = jest.fn();

  component1.doA();
  component2.doD();

  // Verify the console logs
  expect(console.log).toHaveBeenCalledWith('Component 1 does A.');
  expect(console.log).toHaveBeenCalledWith('Mediator reacts on A and triggers following operations:');
  expect(console.log).toHaveBeenCalledWith('Component 2 does C.');
  expect(console.log).toHaveBeenCalledWith('Component 2 does D.');
  expect(console.log).toHaveBeenCalledWith('Mediator reacts on D and triggers following operations:');
  expect(console.log).toHaveBeenCalledWith('Component 1 does B.');
  expect(console.log).toHaveBeenCalledWith('Component 2 does C.');
});
