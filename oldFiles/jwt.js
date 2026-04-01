// import { jsonWebToken } from "jsonwebtoken";

// const {jsonWebToken} = jsonWebToken;

// const token = jsonWebToken.sign({ userId: 1 }, "secretKey", { expireIn: "1h" });

// jsonWebToken.verify(token, "secretKey", (err, decoded) => {
//   if (err) {
//     console.log("Invalid token");
//   }else{
//     console.log(decoded)
//   }
// });

// export default {token}



const jwt = require("jsonwebtoken");

// Create token
const token = jwt.sign(
  { userId: 1 },
  "secretKey",
  { expiresIn: "1h" }
);

// Verify token
jwt.verify(token, "secretKey", (err, decoded) => {
  if (err) {
    console.log("Invalid token");
  } else {
    console.log(decoded);
  }
});