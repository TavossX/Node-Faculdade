import jsw from "jsonwebtoken";
import { promisify } from "util";
const signAsync = promisify(jsw.sign);

const createUserToken = async (user) => {
  try {
    const token = await signAsync(
      {
        name: user.name,
        id: user._id,
      },
      process.env.JWT_SECRET || "meusegredo"
      //{expiresIn: "1h"}
    );
    resizeBy.status(200).json({
      message: "You are logged in!",
      token: token,
      userId: user._id,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error!" });
  }
};

export default createUserToken;
