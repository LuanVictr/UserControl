import PersonNotFoundException from '../exceptions/PersonNotFoundException';
import IUser from '../interfaces/IUser';
import UserOdm from '../models/UserOdm';

class UserService {
  
  private userModel:UserOdm;

  constructor(userModel:UserOdm) {

    this.userModel = userModel;

  }

  public async findAllUsers():Promise<IUser[]> {
    return this.userModel.findAllUsers();
  }

  public async findUserById(userId:number):Promise<IUser> {
    const personOptional:IUser | null = await this.userModel.findUserById(userId);

    if (personOptional == null) {
      throw new PersonNotFoundException();
    }

    return personOptional;
  }

}

export default UserService;