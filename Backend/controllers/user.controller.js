const { validationResult } = require('express-validator');
const userModel = require('../models/user.model');


module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    } 

    const{ firstname, lastname, email, password} = req.body;

    const hashedPassword = await userModel.hashedPassword(password);

    const user = await userService.createUser({
        firstname,
        lastname,
        email,
        password: hashedPassword
    });

    const token = user.genrateAuthToken();

    res.status(201).json({ token, user })
}