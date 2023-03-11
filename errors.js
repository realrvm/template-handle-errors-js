export class PetError extends Error {
  constructor({name, message}) {
    super();
    this.name = name;
    this.message = message;
    // конструктор PetError теперь не будет входить в состав результирующего стека
    Error.captureStackTrace(this, PetError);
  }

  prettyMessage() {
    return `PetError: [${this.name}]: ${this.message}`;
  }
}
