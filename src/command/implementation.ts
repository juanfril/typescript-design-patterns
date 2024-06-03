/**
 * Command Pattern
 * 
 * Description: The Command pattern turns a request into a stand-alone object that contains all information about the request. This transformation lets you parameterize methods with different requests, delay or queue a request's execution, and support undoable operations.
 * 
 * Use: When you need to parameterize objects with operations, delay the execution of a command, or support undo.
 */

// Command interface
interface Command {
  execute(): void;
}

// Concrete Command classes
class SimpleCommand implements Command {
  private payload: string;

  constructor(payload: string) {
    this.payload = payload;
  }

  public execute(): void {
    console.log(`SimpleCommand: See, I can do simple things like printing (${this.payload})`);
  }
}

class ComplexCommand implements Command {
  private receiver: Receiver;
  private a: string;
  private b: string;

  constructor(receiver: Receiver, a: string, b: string) {
    this.receiver = receiver;
    this.a = a;
    this.b = b;
  }

  public execute(): void {
    console.log('ComplexCommand: Complex stuff should be done by a receiver object.');
    this.receiver.doSomething(this.a);
    this.receiver.doSomethingElse(this.b);
  }
}

// Receiver class
class Receiver {
  public doSomething(a: string): void {
    console.log(`Receiver: Working on (${a}).`);
  }

  public doSomethingElse(b: string): void {
    console.log(`Receiver: Also working on (${b}).`);
  }
}

// Invoker class
class Invoker {
  private onStart!: Command;
  private onFinish!: Command;

  public setOnStart(command: Command): void {
    this.onStart = command;
  }

  public setOnFinish(command: Command): void {
    this.onFinish = command;
  }

  public doSomethingImportant(): void {
    console.log('Invoker: Does anybody want something done before I begin?');
    if (this.onStart) {
      this.onStart.execute();
    }

    console.log('Invoker: ...doing something really important...');

    console.log('Invoker: Does anybody want something done after I finish?');
    if (this.onFinish) {
      this.onFinish.execute();
    }
  }
}

export { Command, SimpleCommand, ComplexCommand, Receiver, Invoker };
