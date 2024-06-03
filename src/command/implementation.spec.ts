import { SimpleCommand, ComplexCommand, Receiver, Invoker } from './implementation';

test('Command pattern should execute commands in order', () => {
  const invoker = new Invoker();
  const receiver = new Receiver();

  invoker.setOnStart(new SimpleCommand('Say Hi!'));
  invoker.setOnFinish(new ComplexCommand(receiver, 'Send Email', 'Save Report'));

  // Capture console logs
  console.log = jest.fn();

  invoker.doSomethingImportant();

  // Verify the console logs
  expect(console.log).toHaveBeenCalledWith('Invoker: Does anybody want something done before I begin?');
  expect(console.log).toHaveBeenCalledWith('SimpleCommand: See, I can do simple things like printing (Say Hi!)');
  expect(console.log).toHaveBeenCalledWith('Invoker: ...doing something really important...');
  expect(console.log).toHaveBeenCalledWith('Invoker: Does anybody want something done after I finish?');
  expect(console.log).toHaveBeenCalledWith('ComplexCommand: Complex stuff should be done by a receiver object.');
  expect(console.log).toHaveBeenCalledWith('Receiver: Working on (Send Email).');
  expect(console.log).toHaveBeenCalledWith('Receiver: Also working on (Save Report).');
});
