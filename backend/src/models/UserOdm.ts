import { Model, Schema, model, models } from 'mongoose';
import IUser from '../interfaces/IUser';

class UserOdm {

  private model: Model<IUser>;

  private modelName:string = 'Users';
  
  constructor() {
    const schema = new Schema<IUser>({
      email: { type: String, required: true },
      password: { type: String, required: true },
      role: { type: String, required: true },
    }, { versionKey: false });

    this.model = models[this.modelName] || model(this.modelName, schema);
  }

  public async findAllUsers():Promise<IUser[]> {
    return this.model.find();
  }
}

export default UserOdm;