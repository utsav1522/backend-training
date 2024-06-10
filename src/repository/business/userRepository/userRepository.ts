import { User } from "./model";
import { Logger } from "../../../libs/requestLogger";

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

  public async findOneByQuery(query: object, projection?: object) {
    try {
      let projections;
      if (projection && Object.keys(projection).length) {
        projections = { ...projection, __v: 0 };
      }
      const doc = await User.findOne(query, projections);
      return doc;
    } catch (error: any) {
      Logger.error(
        `user Repo Error: findOneByQuery: ${error.errorResponse.errmsg}`
      );
      throw new Error(error.errorResponse.errmsg);
    }
  }

  public async updateUser(filter: object, query: object) {
    try {
      const doc = await User.updateOne(filter, query, { upsert: true });
      return doc;
    } catch (error: any) {
      Logger.error(
        `User Repo Error: Update Error: ${error.errorResponse.errmsg}`
      );
      throw new Error(error.errorResponse.errmsg);
    }
  }
}
export const userRepository = new UserRepository();
