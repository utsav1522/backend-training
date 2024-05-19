import { mockData } from "../../mock/MockData.js";
import { userRepository } from "../../repository/business/userRepository/userRepository.js";
import bcrypt from "bcrypt";

const getUserDataById = (id) => {
  let result = mockData?.data.find((ele) => {
    if (ele.id === Number(id)) {
      return ele;
    }
  }) || { data: "no data" };
  return result;
};

const addNewUser = async (userDetails) => {
  try {
    console.log(userDetails);
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(userDetails.password, salt);
    userDetails.password = hashPassword;
    const result = await userRepository.insertNewUser(userDetails);
    return result;
  } catch (err) {
    return err;
  }
};

export { getUserDataById, addNewUser };
