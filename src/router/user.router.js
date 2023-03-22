import { Router } from "express";
import { generateProducts } from "../mocks/products.mock.js";

const router = Router()

router.get('/', async(req, res) => {
    const users = []

    for (let i = 0; i < 100; i++) {
        users.push(generateProducts())
    }


    res.send({status: "success", payload: users})
})

export default router