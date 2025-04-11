export const register = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  try {
    if (!name || !email || !password) {
      throw error;
    }
  } catch (error) {
    console.log(error);
  }
  res.status(200).json({
    message: "Registration",
  });
};
