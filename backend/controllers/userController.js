const bcrypt = require('bcrypt');
const userModel = require("../models/userModel");


exports.getUsers = async (req, res) => {
    try {
        const users = await userModel.find({});
        if (!users) {
            return res.send({
                message: "no uses found"
            })
        } else {
            return res.send({
                userCount: users.length,
                data: users
            });
        }
    } catch (error) {
        console.error(error);
    }
}

exports.getUser = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await userModel.findById(id);
        if (!user) {
            res.send({
                message: "no user found"
            })
        } else {
            res.send({
                user,
            })
        }
    } catch (error) {
        console.log(error);
        res.send({
            error: "call back error"
        })
    }
}

exports.newUser = async (req, res) => {
    const {email, password, firstName, lastName, role, location, active} = req.body;
    if(!email || !password || !firstName || !lastName || !role || !location) {
        return res.send({
            message: "required fields are missing"
        })
    }

    const existingUser = await userModel.findOne({ email });
    if(existingUser) {
        return res.send({
            "message": "user already exists"
        })
    }

    const hashedPassword = await bcrypt.hash(password, 14);
    const user = new userModel({firstName, lastName, role, location, active, email, password: hashedPassword});
    await user.save();
    return res.send({
        message: "user created successfully",
        user,
    })
}

exports.updateUser = async (req, res) => {
    try {
        const {id} = req.params;
        const {email, password, firstName, lastName, role, location, active} = req.body;
        const user = await userModel.findByIdAndUpdate(id, req.body, {new: true});
        if (!user) {
            return res.status(400).send({
                message: "User wasn't found"
            })
        } else {
            return res.status(200).send({
                message: "User saved successfully",
                user,
            })
        }
    } catch (error) {
        console.error(error)
        return res.status(500).send({
            message: "Error updating user",
            error: error,
        })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await userModel.findByIdAndDelete(id);
        if (!user) {
            return res.status(400).send({
                message: "User not found",
            })
        } else {
            return res.status(200).send({
                message: "User deleted successfully",
            })
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            message: 'Error deleting user',
            error: error,
        })
    }
}

exports.login = async (req, res) => {
    try {
        const {email, password} = req.body;
        if (!email || !password) {
            return res.status(400).send({
                message: "Both fields are required",
            })
        }
        const user = await userModel.findOne({email});
        if (!user) {
            return res.status(400).send({
                message: "User is not registered",
            })
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send({
                message: "Credentials do not match",
            })
        }
        return res.status(200).send({
            message: `user is logged in.`,
            user,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            message: "Error: callback error",
            error: error,
        })
    }
}