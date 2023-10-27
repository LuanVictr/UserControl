import IUserSaved from "./IUserSaved";

interface IUserResponse {
  token:string;
  user:IUserSaved
}

export default IUserResponse;