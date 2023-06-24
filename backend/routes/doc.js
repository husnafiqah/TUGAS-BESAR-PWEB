import express from "express";
import {
    getDocuments,
    getDoc,
    getDocStatus,
    saveDocumentt,
    updatestsdocument
} from "../controllers/doc.js";

const router = express.Router();
router.get('/Document', getDocuments);
router.get('/doc/:username', getDoc);
router.get('/doc/status/:username', getDocStatus);
router.post('/documentfile', saveDocumentt);
router.post('/documentsign/:id', updatestsdocument);

export default router;