/**
 * 6.Implement middleware to validate the geographic location of the client. 
 * If the request is not coming from an expected region, respond with an error.

 */

import fetch from "node-fetch";

const geographyMiddleware = async (req, res, next) => {
  const ipAddress = req.params.ipAddress;
  const fetchData = await fetch(`https://ipapi.co/134.111.1.1/json/`);
  const resData = await fetchData.json();
  if (resData["region"] === "Massachusetts") {
    res.json(resData);
  } else {
    res.send("You are not authorised to view");
  }
};
export { geographyMiddleware };
