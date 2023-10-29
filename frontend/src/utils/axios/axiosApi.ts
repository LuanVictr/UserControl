import IUserResponse from "@/src/interfaces/ILoginResponse";
import IUser from "@/src/interfaces/IUser";
import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:1880' ,
});

export const requestLogin = async (body:IUser):Promise<IUserResponse> => {
  const { data } = await api.post('/login', body);
  return data;
}

export const requestUserCriation = async (body:IUser) => {
  const { data } = await api.post('/users', body);
  return data;
}

export const requestAddresses = async () => {
  const { data } = await api.get('/address');
  return data;
}
