import PhoneModel from "../models/Phone.js";

class PhoneService {
    async getPhones() {
        const result = await PhoneModel.find();
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
