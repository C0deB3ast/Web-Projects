import User from "../models/usermodel.js";
import  catchAsyncErrors  from "../middleware/catchAsyncErrors.js";
import ErrorHandeler from "../utils/errorHandler.js";

//Register User

export const registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "this is a sample id",
      url: "profileurl",
    },
  });

  res.status(201).json({
    success: true,
    user,
  });
});
