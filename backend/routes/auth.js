const router = require("express").Router();
const userRegister = require("../models/collection");
const authenticate = require("../middleware/authenticate");
const bcrypt = require('bcryptjs');

//Register
router.post("/register", async (req, res) => {
  const { fullname, email,password, cpassword } = req.body;
    try {
        const user = new userRegister({ fullname,email,password, cpassword});
        await user.save();
        res.status(201).json({ message: "user registered successfully" });
    }
    catch (e) {
        res.status(401).send(e);
    }
});


//LOGIN
router.post("/login", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(422).json({ error: "Please Fill all fields" });
    }



    const userLogin = await userRegister.findOne({ email: email });
    if (userLogin) {
        const isMatch = await bcrypt.compare(password, userLogin.password);

        token = await userLogin.generateAuthToken();
        console.log(token);
        res.cookie("jwtoken", token, {
            expires: new Date(Date.now() + 25892000000),
            httpOnly: true
        });
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid Credentials" });

        }
        else {
            return res.json({ error: "User signin Successfully" });
        }

    }
}
catch (e) {
    res.status(401).send(e);
}
});



//user data after login
router.get('/userLogin', authenticate, (req, res) => {
  res.send(req.rootUser);
})


router.get('/logout', (req, res) => {
  console.log("Home Page");
  res.clearCookie('jwtoken', { path: '/' });
  res.status(200).send("logout Successfull");
})

module.exports = router;
