import HttpStatus from '../enums/HttpStatus';

class PersonNotFoundException extends Error {
  private httpStatus:HttpStatus;

  constructor() {
    super('Pessoa não encontrada!');
    this.httpStatus = HttpStatus.NOT_FOUND;
  }
}

export default PersonNotFoundException;