const express = require('express')
const asyncHandler = require('express-async-handler')
const {Op} = require('sequelize')

const { Manual, Stratagem } = require('../../db/models')
const { requireAuth } = require('../../utils/auth')

const router = express.Router();

async function searchManuals(input, userId){
    const foundManuals = await Manual.findAll({
        where: {userId, title: { [Op.iLike]: `%${input}%`}}
    })

    return foundManuals
}

async function searchStratagems(input, userId){
    const foundManualsWithStrats = await Manual.findAll({
        where: {userId},
        include: [
            {model: Stratagem, where: { title: { [Op.iLike]: `%${input}%`}}}
        ]
    })

    const foundStratagems = []

    foundManualsWithStrats.forEach(manual => {
        manual.Stratagems.forEach(stratagem => foundStratagems.push(stratagem))
    })

    return foundStratagems
}


router.get('/:input', requireAuth, asyncHandler(async (req, res) => {
    const userId = req.user.id
    const input = req.params.input
    const arrayfoundManuals = await searchManuals(input, userId)
    const arrayfoundStratagems = await searchStratagems(input, userId)

    
    const foundManuals = {}
    arrayfoundManuals.forEach(manual => {
        foundManuals[manual.id] = manual;
    })

    const foundStratagems = {}

    arrayfoundStratagems.forEach(stratagem => {
        foundStratagems[stratagem.id] = stratagem;
    })

    res.json({foundManuals ,foundStratagems})

}))

module.exports = router