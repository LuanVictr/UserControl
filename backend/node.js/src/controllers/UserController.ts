import HttpStatus from '../enums/HttpStatus';
import IUser from '../interfaces/IUser';
import UserService from '../services/UserService';
import { Request, Response } from 'express';

class UserController {

  private userService:UserService;
  
  constructor(userService:UserService) {

    this.userService = userService;

  }

  public async findAllUsers(_req: Request, res: Response) {
    const result:IUser[] = await this.userService.findAllUsers();
    return res.status(HttpStatus.OK).json(result);
  }

  public async findUserById(req: Request, res: Response) {
    try {
      const userId:number = parseInt(req.params.id, 10);
      const personFound = this.userService.findUserById(userId);

      return res.status(HttpStatus.OK).json(personFound);

    } catch (exception:any) {
      return res.status(HttpStatus.NOT_FOUND).json({ message: exception.message });
    }
  }

  public async createUser(req: Request, res: Response) {
    const newUser:IUser = req.body;

    const createdUser:IUser = await this.userService.createUser(newUser);

    return res.status(HttpStatus.CREATED).json(createdUser);

  }

}

export default UserController;