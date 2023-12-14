const User = require("../models/user.model");
const bcrypt = require("bcrypt");

exports.create_user = async function (data) {
  try {
    const { email, password, type, is_active } = data;

    if (!email) throw new Error("Please enter Email");
    if (!password) throw new Error("Please enter Password");
    if (!type) throw new Error("Please enter Type");

    const emailExist = await User.findOne({ where: { email: email } });

    if (emailExist) {
      throw new Error("Email already exists");
    }

    const hashedpassword = await bcrypt.hash(password, 12);

    return await User.create({
      email,
      password: hashedpassword,
      type,
      is_active,
    });
  } catch (err) {
    throw new Error(err);
  }
};
