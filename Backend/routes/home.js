import { Router } from "express";
import userdataschema from '../mongoose/userdata.js'

const router = Router();

router.get('/', async (req, res) => {

    const usr = "bigsagar18@gmail.com"
    //fetching from db
    try {
        const user = await userdataschema.findOne({"basicinfo.email": usr })
        if(user){
        res.status(200).json(user);
        }
        else{
            res.status(404).json({ message: "User not found" });
        }

    } catch (error) {
        console.log(error);
        res.status(500).send("OOPS!!! An Error Occured")
    }

})

router.get('/:id', async (req, res) => {

    const usr = req.params.id
    //fetching from db
    try {
        const user = await userdataschema.findOne({"basicinfo.email": usr })
        if(user){
        res.status(200).json(user);
        }
        else{
            res.status(404).json({ message: "User not found" });
        }

    } catch (error) {
        console.log(error);
        res.status(500).send("OOPS!!! An Error Occured")
    }

})

export default router;