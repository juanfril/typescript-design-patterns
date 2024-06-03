/**
 * Bridge Pattern
 * 
 * Description: The Bridge pattern decouples an abstraction from its implementation so that the two can vary independently.
 * 
 * Use: When you want to avoid a permanent binding between an abstraction and its implementation, and when both the abstractions and their implementations should be extensible by subclassing.
 */

// Implementation interface
interface Implementation {
  operationImplementation(): string;
}

// Concrete Implementations
class ConcreteImplementationA implements Implementation {
  public operationImplementation(): string {
    return 'ConcreteImplementationA: Here\'s the result on the platform A.';
  }
}

class ConcreteImplementationB implements Implementation {
  public operationImplementation(): string {
    return 'ConcreteImplementationB: Here\'s the result on the platform B.';
  }
}

// Abstraction
class Abstraction {
  protected implementation: Implementation;

  constructor(implementation: Implementation) {
    this.implementation = implementation;
  }

  public operation(): string {
    return `Abstraction: Base operation with:\n${this.implementation.operationImplementation()}`;
  }
}

// Extended Abstraction
class ExtendedAbstraction extends Abstraction {
  public operation(): string {
    return `ExtendedAbstraction: Extended operation with:\n${this.implementation.operationImplementation()}`;
  }
}

export { Abstraction, ExtendedAbstraction, ConcreteImplementationA, ConcreteImplementationB, Implementation };
