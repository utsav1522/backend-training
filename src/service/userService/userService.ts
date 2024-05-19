import { mockData } from "../../mock/MockData.js";

const getUserDataById = (id: number) => {
  let result = mockData?.data.find((ele) => {
    if (ele.id === Number(id)) {
      return ele;
    }
  }) || { data: "no data" };
  return result;
};

export { getUserDataById };
