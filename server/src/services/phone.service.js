import PhoneModel from "../models/Phone.js";
import ApiError from "../exceptions/api-error.js";

class PhoneService {
  async getPhones(page = 1, category, sortBy, order, search) {
    const limit = 4;
    const searchParams = {
      ...(category && { category }),
      ...(search && { title: new RegExp(search, "i") })
    };
  
    const [result, countPhones] = await Promise.all([
      PhoneModel.find(searchParams)
        .skip((page - 1) * limit)
        .limit(limit)
        .sort({ [sortBy]: order }),
      PhoneModel.countDocuments()
    ]);

    return { result, countPhones };
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
