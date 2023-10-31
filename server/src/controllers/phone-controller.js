import phoneService from '../services/phone.service.js';

class PhoneController {
  async getPhones(req, res, next) {
    try {
      const {page, limit, category, sortBy, order, search} = req.query;
      const getPhonesService = await phoneService.getPhones(page, limit, category, sortBy, order, search);
      res.status(200).json(getPhonesService);
    } catch (e) {
      next(e);
    }
  }

  async addPhone(req, res, next) {
    const [title, imageUrl, types, sizes, price, category, rating] = req.body;
    try {
      const addPhoneService = await phoneService.addPhone(
        title, imageUrl, types, sizes, price, category, rating
      );
      res.status(201).json(addPhoneService);
    } catch (e) {
      next(e);
    }
  }
}

export default new PhoneController();
