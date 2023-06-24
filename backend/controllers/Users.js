import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import path from "path";
import fs from "fs";


export const getUsers = async (req, res) => {
    try {
        const users = await Users.findAll({
            attributes: ['username', 'email']
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

export const Register = async (req, res) => {
    const { username, email, password, confPassword, active, sign_img } = req.body;
    if (password !== confPassword) return res.status(400).json({ msg: "Password dan Confirm Password tidak cocok" });
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await Users.create({
            username: username,
            email: email,
            password: hashPassword,
            active: active,
            sign_img: sign_img
        });
        res.json({"rc":"00", msg: "Register Berhasil" });
    } catch (error) {
        console.log(error);
    }
}

export const Login = async (req, res) => {
    try {
        const user = await Users.findAll({
            where: {
                email: req.body.email
            }
        });
        const match = await bcrypt.compare(req.body.password, user[0].password);
        if (!match) return res.status(400).json({ msg: "Wrong Password" });
        const userId = user[0].id;
        const username = user[0].username;
        const email = user[0].email;
        const accessToken = jwt.sign({ userId, username, email }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '20s'
        });
        const refreshToken = jwt.sign({ userId, username, email }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '1d'
        });
        await Users.update({ refresh_token: refreshToken }, {
            where: {
                id: userId
            }
        });
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        const users = await Users.findAll({
            where: {
                email: req.body.email
            }
        });
        res.json({ token : accessToken,"rc":"00",user: users });
    } catch (error) {
        res.status(404).json({ msg: "Email tidak ditemukan" });
    }
}

export const Logout = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(204);
    const user = await Users.findAll({
        where: {
            refresh_token: refreshToken
        }
    });
    if (!user[0]) return res.sendStatus(204);
    const userId = user[0].id;
    await Users.update({ refresh_token: null }, {
        where: {
            id: userId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}

export const edit = async (req, res) => {
    try {
        console.log(req.body);
        const salt = await bcrypt.genSalt();
        if(req.body.password === ""){
            await Users.update({
                username: req.body.username,
                email: req.body.email,
                active: req.body.active
            }, {
                where: {
                    id: req.params.id
                }
            });
        }else{
            const hashPasswordedit = await bcrypt.hash(req.body.password, salt);
            console.log(hashPasswordedit);
            await Users.update({
                username: req.body.username,
                email: req.body.email,
                password: hashPasswordedit,
                active: req.body.active,
                sign_img: req.body.sign_img
            }, {
                where: {
                    id: req.params.id
                }
            });
        }
        
        res.json({rc: "00", msg: "Berhasil di update" });
    } catch (error) {
        console.log(error);
    }
}

export const editsign = async (req, res) => {
    try {
        console.log(req.body);
        let base64img = req.body.signfile;
        let base64Image = base64img.split(';base64,').pop();

        const filepathimg = `../signature/file/`+req.body.username+".jpg";
        fs.writeFile(filepathimg, base64Image, { encoding: 'base64' }, function (err) {
            console.log('File sign created');
        });

        await Users.update({
            sign_img: "http://127.0.0.1:5500/signature/file/"+req.body.username+".jpg"
        }, {
            where: {
                id: req.params.id,
                username:req.body.username
            }
        });
        res.json({rc: "00", msg: "Berhasil di update sign" });
    } catch (error) {
        console.log(error);
    }
}


