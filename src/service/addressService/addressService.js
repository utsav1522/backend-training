import fs from "fs/promises";

const getLocations = async () => {
  // const locationsData = [];
  const result = await fs.readFile(
    "/home/utsav.jain/Desktop/backend-training/backend-training/Assignment-2/mock/mocking.txt"
  );
  return JSON.parse(result);
};
export { getLocations };
