/**
 * 6.Implement middleware to validate the geographic location of the client. 
 * If the request is not coming from an expected region, respond with an error.

 */

import { Request, Response } from "express";

import os from "os";
const getLocalIpAddress = () => {
  const interfaces = os.networkInterfaces();
  for (const interfaceName of Object.keys(interfaces)) {
    for (const interfaceInfo of interfaces[interfaceName]!) {
      if (!interfaceInfo.internal && interfaceInfo.family === "IPv4") {
        return interfaceInfo.address;
      }
    }
  }
  return null;
};

const geographyMiddleware = async (req: Request, res: Response) => {
  const ip = getLocalIpAddress();
  const fetchData = await fetch(`https://ipapi.co/json/`);
  const resData = await fetchData.json();
  if (
    resData["country_name"] === "India" ||
    resData["country_name"] === "United States"
  ) {
    res.json(resData);
  } else {
    res.send("You are not authorised to view");
  }
};
export { geographyMiddleware };
