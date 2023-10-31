import phoneService from "../services/phone.service.js";

class PhoneController {
  async getPhones(req, res, next) {
    try {
      const { page, limit, category, sortBy, order, search } = req.query;
      const getPhonesService = await phoneService.getPhones(
        Number(page),
        Number(limit),
        category,
        sortBy,
        order,
        search
      );
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

  async getPhoneById(req, res, next) {
    try {
        const getPhoneByIdService = await phoneService.getPhoneById(req.params.id);
        res.status(200).json(getPhoneByIdService);
    } catch (e) {
        next(e);
    }
  }
}

export default new PhoneController();
