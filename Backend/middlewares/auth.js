const Admin = require('../models/AdminSchema.js');
const jwt = require("jsonwebtoken");

const isAuthenticated = async(req,res,next)=>{
    const { token } = req.cookies;
    // console.log(token);
    if (!token) {
        return res.status(404).json({
            success: false,
            message: "Login First",
        })
    }
    const decoded = jwt.verify(token, "abcd");
    req.admin = await Admin.findById(decoded._id);
    next();
}

module.exports = isAuthenticated;