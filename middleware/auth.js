const jwt = require("jsonwebtoken");
const HttpError = require("../models/http-error");

module.exports = (req, res, next) => {
    if(req.method === "OPTIONS"){
        return next();
    }

    try {
        const token = req.headers.authorization.split(" ")[1]; // Authorization: "BEARER TOKEN", need to split the string
        if(!token){
            throw new Error("Authentication Failed!");
        }

        let decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        
        if(!decodedToken.isAdmin){
            throw new Error("Authentication Failed!");
        }

        next();
    }catch (err) {
        console.log(err);
        const error = new HttpError("Authentication Failed!", 401);
        return next(error);
    }
   
    
};