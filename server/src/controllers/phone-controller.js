import phoneService from '../services/phone.service.js';

class PhoneController {
    async getPhones(req, res, next) {
        try {
            const {category, sortBy, order} = req.query;
            const getPhonesService = await phoneService.getPhones(category, sortBy, order);
            res.status(200).json(getPhonesService);
        } catch (e) {
            next(e);
        }
    }

    async addPhone(req, res, next) {
        try {
            const addPhoneService = await phoneService.addPhone(
                req.body.title,
                req.body.imageUrl,
                req.body.types,
                req.body.sizes,
                req.body.price,
                req.body.category,
                req.body.rating
            );
            res.status(201).json(addPhoneService);
        } catch (e) {
            next(e);
        }
    }
}

export default new PhoneController();
