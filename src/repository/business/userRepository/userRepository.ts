import { User } from "./model.js";

class UserRepository {
  insertNewUser = async (userDetails: any) => {
    try {
      console.log(userDetails);
      const result = await User.create(userDetails);
      console.log(result);
      return result;
    } catch (err: any) {
      return `MongoDb Insert Error ${err}`;
    }
  };

  findUserByQuery = async (filter: any) => {
    try {
      let projections = { __v: 0, id: 0 };
      const doc = await User.findOne(filter, projections);

      return doc;
    } catch (err) {
      return `MongoDb Find Error: ${err}` ;
    }
  };

  updateUser = async (filter :any, updateValue: any) => {
    try {
      const result = await User.updateOne(filter, updateValue, {
        upsert: true,
      });
      return result;
    } catch (err: any) {
      return `MongoDB Updation Error: ${err}`;
    }
  };
}
export const userRepository = new UserRepository();
