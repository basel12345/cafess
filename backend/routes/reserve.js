const express = require("express");
const Joi = require("joi");
const Reserve = require("../models/reserve");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        /* start validation by joi library */
        const schema = Joi.object({
            name: Joi.string().required(),
            numbers: Joi.number().required(),
            date: Joi.string().required(),
            Message: Joi.string().required(),
        });
        const result = schema.validate(req.body);
        if (result.error) res.status(400).send(result.error.details[0].message);
        /* end validation by joi library */
        const newReserve = await new Reserve({
            name: req.body.name,
            numbers: req.body.numbers,
            date: req.body.date,
            Message: req.body.Message
        });
        const reserve = await newReserve.save();
        res.send(reserve);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
