import { User } from "./model.js";

class UserRepository {
  insertNewUser = async (userDetails) => {
    try {
      console.log(userDetails);
      const result = await User.create(userDetails);
      console.log(result);
      return result;
    } catch (err) {
      return err;
    }
  };
}
export const userRepository = new UserRepository();
