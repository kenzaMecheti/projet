const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const Register = asyncHandler(async (req, res) => {
  const {
    first_name,
    last_name,
    username,
    birth_date,
    phone_number,
    gender,
    email,
    password,
  } = req.body;

  if (
    !first_name ||
    !last_name ||
    !username ||
    !birth_date ||
    !phone_number ||
    !gender ||
    !email ||
    !password
  ) {
    res.status(404).json({ message: " saias" });
  }

  const duplicate = await User.findOne({ email }).lean().exec();
  if (duplicate) {
    return res.status(409).json({ message: "Cette email existe deja" });
  }

  const hashedPassword = await bcrypt.hash(
    password,
    Number(process.env.BCRYPT_SALT)
  );
  const userObject = {
    first_name,
    last_name,
    username,
    birth_date,
    phone_number,
    gender,
    email,
    password: hashedPassword,
  };

  const newUser = await User.create(userObject);

  res.status(201).json({
    first_name: newUser.first_name,
    last_name: newUser.last_name,
    username: newUser.username,
    birth_date: newUser.birth_date,
    phone_number: newUser.phone_number,
    gender: newUser.gender,
    email: newUser.email,
  });
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "veillez saisir tous les champs" });
  }
  const foundUser = await User.findOne({ email }).exec();
  if (!foundUser) {
    return res.status(400).json({ message: "email ou password inexstant" });
  }
  const match = await bcrypt.compare(password, foundUser.password);
  if (!match) {
    return res.status(400).json({ massage: "email ou password inexstant" });
  }
  console.log("edde");
  const accesToken = jwt.sign(
    {
      userInfo: {
        email: foundUser.email,
        id: foundUser._id,
      },
    },
    process.env.ACCES_TOKEN_SECRET,
    { expiresIn: "1d" }
  );
  const refreshToken = jwt.sign(
    { email: foundUser.email },
    process.env.REFRECH_TOKEN_SECRET,
    { expiresIn: "5d" }
  );
  res.cookie("jwt", refreshToken, {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
  res.json({ accesToken });
});
// //@desc refresh
// //@route get /auth/refresh
// //@access public
const refresh = asyncHandler(async (req, res) => {
  const cookies = req.cookies;
  console.log("cookies", cookies);
  if (!cookies?.jwt) return res.status(401).json({ message: "unothorized" });
  const refreshToken = cookies.jwt;
  jwt.verify(
    refreshToken,
    process.env.REFRECH_TOKEN_SECRET,
    asyncHandler(async (err, decoded) => {
      if (err) return res.status(400).json({ message: "forbidden" });
      const foundUser = await User.findOne({ email: decoded.email });
      if (!foundUser) return res.status(401).json({ message: "unauthorizesd" });
      const accesToken = jwt.sign(
        {
          userInfo: {
            email: foundUser.email,
            id: foundUser._id,
          },
        },
        process.env.ACCES_TOKEN_SECRET,
        { expiresIn: "10d" }
      );
      res.json({ accesToken });
    })
  );
});

// //@desc logout
// //@route get /auth/logout
// //@access public
const logout = asyncHandler(async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204);
  res.clearCookie("jwt", { httpOnly: true, sameSite: "none", secure: true });
  res.json({ message: "Cookie cleared" });
});

module.exports = {
  logout,
  login,
  refresh,
  Register,
};
