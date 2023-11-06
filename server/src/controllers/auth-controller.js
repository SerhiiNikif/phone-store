import userService from '../services/auth/user.service.js';

class UserController {
  async registration(req, res, next) {
    try {
      const {email, password} = req.body;
      const userData = await userService.registration(email, password);
      
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async activate(req, res, next) {
    try {
      const activationLink = req.params.link;
      await userService.activate(activationLink);

      return res.redirect(process.env.CLIENT_URL);
    } catch (e) {
      next(e);
    }
  }

  async login(req, res, next) {
    try {
      const {email, password} = req.body;
      const userData = await userService.login(email, password);
      
      return res.json(userData);
    } catch (e) {
      next(e);
    }
}
}

export default new UserController();
