const User = require("../models/user");
const Admin = require("../models/admin");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const HttpError = require("../models/http-error");
const user = require("../models/user");

const signup = async (req, res, next) => {
    // Check the results of request validation middleware
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        console.log(errors);
        throw new HttpError("Invalid inputs, please check your data", 422);
    }
    // Extract user information from the request body
    const { firstName, lastName, email, password, passwordConfirm } = req.body;

    // Check the database for an existing user with matching email address
    // If found, return an error
    try {
        const existingUser = await User.findOne({email: email});
        if(existingUser){
            throw new HttpError("User account with this email already exists", 422);
        }

        // If there is no existing user with that email, check that the passwords match
        if(password !== passwordConfirm){
            throw new HttpError("Passwords do not match", 422);
        }

        // If the passwords match, hash the password, then create a new user account
        let hashedPassword = await bcrypt.hash(password, 12);
        const user =  new User({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword
        });
       
        await user.save();
        console.log(user);

        let token;
        token = jwt.sign({userID: user._id, email: user.email, isAdmin: user.isAdmin}, process.env.JWT_SECRET, {expiresIn: "1h"});

        res.status(201).send({token: token, userID: user._id, isAdmin: user.isAdmin, email: user.email});

    }catch (err) {
        console.log(err);
        let error = new HttpError("User creation failed", 500);
        return next(error);
    }     
    
};

const login = async (req, res, next) => {
    // Extract login credentials from the request body
    const { email, password } = req.body;

    
    try {
        // Check the database for a user with that email
        let existingUser = await User.findOne({email: email});
        if(!existingUser){
            throw new HttpError("User account not found", 422);
        }

        // If a user is found, check the password
        let passwordMatch = false;
        passwordMatch = await bcrypt.compare(password, existingUser.password);

        // If the password is correct, generate a token and log them in
        if(passwordMatch){
            let token;
            token = jwt.sign({userID: existingUser._id, email: existingUser.email, isAdmin: existingUser.isAdmin}, process.env.JWT_SECRET, {expiresIn: "1h"});
            res.status(201).json({userID: existingUser._id, email: existingUser.email, isAdmin: existingUser.isAdmin, token: token});
        }else{
            // If password doesn't match, reject login attempt
            throw new HttpError("Authentication Failed", 401);
        }

    } catch (err) {
        console.log(err);
    }
    
};

const adminLogin = async (req, res, next) => {
    // Extract login credentials from the request body
    const { email, password } = req.body;
    
    try {
        // Check the database for a user with that email
        let existingUser = await Admin.findOne({email: email});
        if(!existingUser){
            throw new HttpError("User account not found", 422);
        }

        // If a user is found, check the password
        let passwordMatch = false;
        passwordMatch = await bcrypt.compare(password, existingUser.password);

        // If the password is correct, generate a token and log them in
        if(passwordMatch){
            let token;
            token = jwt.sign({userID: existingUser._id, email: existingUser.email, isAdmin: existingUser.isAdmin}, process.env.JWT_SECRET, {expiresIn: "1h"});
            res.status(201).json({userID: existingUser._id, email: existingUser.email, isAdmin: existingUser.isAdmin, token: token});
        }else{
            // If password doesn't match, reject login attempt
            throw new HttpError("Authentication Failed", 401);
        }

    } catch (err) {
        console.log(err);
    }
    
}

module.exports = {
    signup,
    login,
    adminLogin
};