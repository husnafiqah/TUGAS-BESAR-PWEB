import Document from "../models/DocumentModel.js";
import path from "path";
import fs from "fs";
import { Op } from "sequelize";


export const getDocuments = async (req, res) => {
    try {
        const response = await Document.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getDoc = async (req, res) => {
    try {
      const { username } = req.params;
  
      const count = await Document.count({
        where: {
          [Op.or]: [
            { username: username },
            { username_to: username }
          ]
        }
      });
  
      res.json({ count });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

export const getDocStatus = async (req, res) => {
  try {
    const { username } = req.params;

    const count = await Document.count({
      where: {
        [Op.or]: [
          { username: username },
          { username_to: username }
        ],
        status: 2
      }
    });

    res.json({ count });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
 
//YANG INI YANG DIPAKAI YGY
export const saveDocumentt = async (req, res) => {
    console.log("req:" + req);
    try {
        let base64pdf = req.body.pdffile;
        let base64Pdf = base64pdf.split(';base64,').pop();
        const datenow = Date.now();
        const filenama = req.body.filenama;
        let pdff = filenama+"-"+ req.body.username + "_" + datenow + ".pdf";
        console.log(pdff);
        const filepathpdf = `../signature/file/` + pdff;

        fs.writeFile(filepathpdf, base64Pdf, { encoding: 'base64' }, function (err) {
            console.log('File Pdf created');
        });

        await Document.create({
            username: req.body.username,
            filenama: filenama,
            urlpdf: "http://127.0.0.1:5500/signature/file/" +pdff,
            status: "1",
            username_to: req.body.username_to
        });
        res.json({ "rc": "00", "msg": "Document Berhasil Disimpan." });
    } catch (error) {
        console.log(error);
    }

}

export const updatestsdocument = async (req, res) => {
    console.log("req:" + req);
    try {
        await Document.update({ status: "2" }, {
            where: {
                document_id: req.params.id
            }
        });
        res.json({ "rc": "00", "msg": "Document Berhasil Diupdate." });
    } catch (error) {
        console.log(error);
    }

}

