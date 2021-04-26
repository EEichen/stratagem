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
    const foundManuals = await searchManuals(input, userId)
    const foundStratagems = await searchStratagems(input, userId)

    res.json({foundManuals ,foundStratagems})

}))

module.exports = router