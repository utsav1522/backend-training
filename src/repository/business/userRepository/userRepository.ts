import { User } from "./model";

class UserRepository {
  insertNewUser = async (userDetails: any) => {
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
