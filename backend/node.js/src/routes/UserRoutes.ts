import { Router } from 'express';
import UserOdm from '../models/UserOdm';
import UserService from '../services/UserService';
import UserController from '../controllers/UserController';

const routes:Router = Router();
const userOdm:UserOdm = new UserOdm();
const userService:UserService = new UserService(userOdm);
const userController:UserController = new UserController(userService);

routes.get('/users', userController.findAllUsers.bind(userController));
routes.get('/users/:id', userController.findUserById.bind(userController));
routes.post('/users', userController.createUser.bind(userController));

export default routes;