/**
 * Factory Method Pattern
 * 
 * Description: Defines an interface for creating an object, but lets subclasses alter the type of objects that will be created.
 * 
 * Use: When a class can't anticipate the class of objects it must create, or when a class wants its subclasses to specify the objects it creates.
 */

// Product interface
interface Product {
  operation(): string;
}

// Concrete Products
class ConcreteProduct1 implements Product {
  public operation(): string {
    return 'Result of ConcreteProduct1';
  }
}

class ConcreteProduct2 implements Product {
  public operation(): string {
    return 'Result of ConcreteProduct2';
  }
}

// Creator class
abstract class Creator {
  // Factory Method
  public abstract factoryMethod(): Product;

  public someOperation(): string {
    const product = this.factoryMethod();
    return `Creator: The same creator's code has just worked with ${product.operation()}`;
  }
}

// Concrete Creators
class ConcreteCreator1 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct1();
  }
}

class ConcreteCreator2 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}

export { Creator, ConcreteCreator1, ConcreteCreator2, Product };
