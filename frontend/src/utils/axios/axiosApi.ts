import IUserResponse from "@/src/interfaces/ILoginResponse";
import IUSer from "@/src/interfaces/IUser";
import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:1880' ,
});

export const requestLogin = async (body:IUSer):Promise<IUserResponse> => {
  const { data } = await api.post('/login', body);
  return data;
}