import jwt from "jsonwebtoken";

const generarTOKEN = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "2h",
  });
};

export default generarTOKEN;
