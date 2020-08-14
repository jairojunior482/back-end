import User from "../models/User";
import { hash } from 'bcryptjs';

class UserController {
  async create(request, response) {
    const { name, email, username, password, phone } = request.body;

    const passwordCrypt = await hash(password, 8);

    const user = await User.create({
      name,
      email,
      username,
      password: passwordCrypt,
      phone
    });

    return response.json(user);
  }
}

export default new UserController();