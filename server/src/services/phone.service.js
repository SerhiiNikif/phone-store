import PhoneModel from "../models/Phone.js";
import ApiError from "../exceptions/api-error.js";

class PhoneService {
    async getPhones(category, sortBy, order) {
        const result = await PhoneModel.find(category && {category: category}).sort({[sortBy]: order});
        return result
    }

    async addPhone(title, imageUrl, types, sizes, price, category, rating) {
        await this.checkIfPhoneExists(title);
        const phone = new PhoneModel({title, imageUrl, types, sizes, price, category, rating});
        const result = await phone.save();
        return {id: result._id}
    }

    async checkIfPhoneExists(name) {
        const phone = await PhoneModel.findOne({ name });
        if (phone) {
            throw ApiError.BadRequest(`Phone ${name} already exists`);
        }
    }
}

export default new PhoneService();
