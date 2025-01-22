import { Router } from "express";
import express from 'express'
import multer from 'multer';
import userdataschema from '../mongoose/userdata.js'

const router = Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

//multer config
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${req.params.id}.jpg`);
    }
});
const upload = multer({ storage });

router.post('/upload/:id',upload.single('image'), async (req, res) => {

    //logic for storing userdata in data
    const data = JSON.parse(req.body.formData)

    //saving to db
    try {
        const newuser = new userdataschema(data);
        await newuser.save();
        console.log("Saved new user")
        res.status(201).json({ "message": "Portfolio created successfully", "link": `${data.basicinfo.email}` })

    } catch (error) {
        console.log(error);
        res.status(500).json("Error creating portfolio")
    }
})

export default router;