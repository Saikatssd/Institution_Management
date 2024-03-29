const bcrypt = require("bcrypt");
// const cookies = require("cookie-parser")

const Admin = require('../models/AdminSchema.js');
// import ErrorHandler from "../middlewares/error.js";
const { ErrorHandler, errorMiddleware } = require('../middlewares/error.js');
const sendCookie = require("../utils/feature.js");
// import { ErrorHandler } from '../middlewares/error.js';

// const adminRegister = async (req, res) => {
//     try {
//         const admin = new Admin({
//             ...req.body
//         });

//         const existingAdminByEmail = await Admin.findOne({ email: req.body.email });
//         const existingSchool = await Admin.findOne({ schoolName: req.body.schoolName });

//         if (existingAdminByEmail) {
//             res.send({ message: 'Email already exists' });
//         }
//         else if (existingSchool) {
//             res.send({ message: 'School name already exists' });
//         }
//         else {
//             let result = await admin.save();
//             result.password = undefined;
//             res.send(result);
//         }
//     } catch (err) {
//         res.status(500).json(err);
//     }
// };

// const adminLogIn = async (req, res) => {
//     if (req.body.email && req.body.password) {
//         let admin = await Admin.findOne({ email: req.body.email });
//         if (admin) {
//             if (req.body.password === admin.password) {
//                 admin.password = undefined;
//                 // res.status(201).json({ message: "User logged in successfully", success: true});
//                 res.send(admin);
//                 // res.status(201).json({ message: "User logged in successfully", success: true ,token });
//             } else {
//                 res.send({ message: "Invalid password" });
//             }
//         } else {
//             res.send({ message: "User not found" });
//         }
//     } else {
//         res.send({ message: "Email and password are required" });
//     }
// };

const adminLogIn = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const admin = await Admin.findOne({ email }).select("+password");

        if (!admin) {
            return next(new ErrorHandler("User not found", 400));
        }
        const isMatch = await bcrypt.compare(password, admin.password);

        if (!isMatch) {
            return next(new ErrorHandler("Invalid Email or Password", 400));
        }
        sendCookie(admin, res, `Welcome back, ${admin.name}`, 200);
    } catch (error) {
        console.error(error);
        next(error);

    }
};

const adminRegister = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        let admin = await Admin.findOne({ email });

        if (admin) {
            return next(new ErrorHandler("User Already Exist", 400));
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        admin = await Admin.create({ name, email, password: hashedPassword });

        sendCookie(admin, res, "Registered Successfully", 201);
    } catch (error) {
        next(error);
    }
};


const getProfile = async (req, res) => {
    // const id = "myid";
    // const { token } = req.cookies;
    // // console.log(token);
    // if (!token) {
    //     return res.status(404).json({
    //         success: false,
    //         message: "Login First",
    //     })
    // }
    // const decoded = jwt.verify(token, "abcd");
    // const admin = await Admin.findById(decoded._id);
    res.status(200).json({
        success: true,
        admin: req.admin,
    });
};


const getAdminDetail = async (req, res) => {
    try {
        let admin = await Admin.findById(req.params.id);
        if (admin) {
            admin.password = undefined;
            res.send(admin);
        }
        else {
            res.send({ message: "No admin found" });
        }
    } catch (err) {
        res.status(500).json(err);
    }
}


const allAdmins = async (req, res) => {
    const admins = await Admin.find({});
    res.json(
        {
            success: true,
            admins,
        });
};

const logout = (req, res) => {
    res
        .status(200)
        .cookie("token", "", {
            expires: new Date(Date.now()),
            sameSite: process.env.NODE_ENV === "Develpoment" ? "lax" : "none",
            secure: process.env.NODE_ENV === "Develpoment" ? false : true,
        })
        .json({
            success: true,
            admin: req.admin,
        });
};

module.exports = { adminLogIn, getAdminDetail, getProfile, adminRegister, logout, allAdmins };
