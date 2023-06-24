import express from "express";
import { getUsers, Register, Login, Logout, edit, editsign} from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
// import { postReset } from "../controllers/password.js";
const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.get('/allusers', getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);
router.post('/users/:id', edit);
router.post('/userssign/:id', editsign);
// router.post('/reset-password',postReset);


export default router;