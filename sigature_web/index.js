import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import router from "./routes/index.js";
// import Users from "./models/UserModel.js";
// import Signature from "./models/SignatureModel.js";
// import Document from "./models/DocumentModel.js";

dotenv.config();
const app = express();

try {
    await db.authenticate();
    console.log('DAH KONEK YGY');
    //  await Users.sync();
    //  await Signature.sync();
    //  await Document.sync();
} catch (error) {
    console.error(error);
}

app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(8000, ()=> console.log('SERVERNYA UDAH JALAN DI PORT 8000'));