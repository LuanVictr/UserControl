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

}

export default UserService;