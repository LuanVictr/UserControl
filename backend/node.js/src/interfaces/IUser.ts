import Roles from '../enums/Role';

interface IUser {
  id?:number;
  email:string;
  password:string;
  role:Roles
}

export default IUser;