/**
 * Adapter Pattern
 * 
 * Description: The Adapter pattern allows objects with incompatible interfaces to work together. It acts as a bridge between two incompatible interfaces.
 * 
 * Use: When you want to use an existing class, and its interface does not match the one you need, or when you want to create a reusable class that cooperates with unrelated or unforeseen classes.
 */

// Target interface
interface Target {
  request(): string;
}

// Adaptee class with an incompatible interface
class Adaptee {
  public specificRequest(): string {
    return '.etirw ma I ,olleH';
  }
}

// Adapter class that makes Adaptee's interface compatible with the Target's interface
class Adapter implements Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    this.adaptee = adaptee;
  }

  public request(): string {
    const result = this.adaptee.specificRequest().split('').reverse().join('');
    return `Adapter: (TRANSLATED) ${result}`;
  }
}

export { Target, Adaptee, Adapter };
