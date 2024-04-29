// 7.User Build a validation middleware that dynamically fetches validation rules from a configuration file.
// The rules should be applied based on the route being accessed.

import { userData } from "../../mock/UserMock.js";

const findUser = (id) => {
  const user = userData?.find((ele) => {
    if (ele.id.toString() === id.toString()) {
      return ele;
    }
  });
  return user;
};

const checkPermissionn = (userData, request) => {
  let flag = false;
  userData?.permissions.map((ele) => {
    if (ele.toString() === request.toString()) {
      flag = true;
    }
  });
  return flag;
};

const authorize = (req, res, next) => {
  const userId = req.query.userId;
  const request = req.query.request;
  const userData = findUser(userId);
  console.log(userData);

  if (userData === undefined) {
    res.send("user not found");
  } else {
    if (checkPermissionn(userData, request)) {
      res.send("the permissions is granted ");
    } else {
      res.send("permission not granted");
    }
  }
};

export { authorize };

/**
 * { useId: '1', request: 'read' }
 */
