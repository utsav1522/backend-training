import { User } from "./model.js";

class UserRepository {
  insertNewUser = async (userDetails) => {
    try {
      console.log(userDetails);
      const result = await User.create(userDetails);
      console.log(result);
      return result;
    } catch (err) {
      return new Error("MongoDb Insert Error", err);
    }
  };

  findUserByQuery = async (filter) => {
    try {
      let projections = { __v: 0, id: 0 };
      const doc = await User.findOne(filter, projections);

      return doc;
    } catch (err) {
      return new Error("MongoDb Find Error: ", err);
    }
  };

  updateUser = async (filter, updateValue) => {
    try {
      const result = await User.updateOne(filter, updateValue, {
        upsert: true,
      });
      return result;
    } catch (err) {
      return new Error("MongoDB Updation Error: ", err);
    }
  };
}
export const userRepository = new UserRepository();
