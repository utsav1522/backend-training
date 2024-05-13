import fs from "fs/promises";

const getLocations = async () => {
  const result = await fs.readFile(
    "/home/utsav.jain/Desktop/backend-training/backend-training/mock/mocking.txt"
  );
  return JSON.parse(result);
};
export { getLocations };
