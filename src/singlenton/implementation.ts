// Description: Ensures a class has only one instance and provides a global point of access to it.
class Singleton {
  private static instance: Singleton;

  private constructor() {
    // Private constructor to prevent instantiation
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public someBusinessLogic() {
    // Business logic here
    return 'Business Logic';
  }
}

export default Singleton;
