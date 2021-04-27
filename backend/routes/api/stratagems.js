const express = require('express')
const asyncHandler = require('express-async-handler')
const { check } = require('express-validator')

const { Stratagem, Manual } = require('../../db/models')
const { handleValidationErrors } = require('../../utils/validation')
const { requireAuth } = require('../../utils/auth')

const router = express.Router();

const validateStratagem = [
    check('title')
        .exists({ checkFalsy: true })
        .isLength({ max: 200 })
        .withMessage('stratagem title must be between 1 and 2000 characters'),
    handleValidationErrors,
]

router.post('/', validateStratagem, asyncHandler(async (req, res) => {
    const {title, text, imageUrl, manualId} = req.body;
    if(!text) text = '';
    if (!imageUrl) imageUrl = '';

    const newStratagem = await Stratagem.create({
        title,
        text,
        imageUrl,
        manualId
    })

    res.json({newStratagem})
}))


router.get('/', requireAuth, asyncHandler(async (req, res) => {
    const userId = req.user.id;

    const userStratagems = await Manual.findAll({where: {userId}, include: Stratagem })

    const stratagems = {}

    userStratagems.forEach(manual => {
        manual.Stratagems.forEach(stratagem => {
            stratagems[stratagem.id] = stratagem
        })
    });

    res.json({stratagems})

}))

router.get('/:id', asyncHandler(async (req, res) => {
    const manualId = parseInt(req.params.id)

    const userStratagems = await Stratagem.findAll({where: {manualId}})

    const stratagems = {}

     userStratagems.forEach(stratagem => {
         stratagems[stratagem.id] = stratagem
     })

    res.json({stratagems})
}))

router.put('/:id', validateStratagem, asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id)
    const stratagem = await Stratagem.findByPk(id)
    const {title, text, imageUrl} = req.body

    if(stratagem){
        await stratagem.update({title, text, imageUrl})
    }
}))

router.delete('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id)
    const stratagem = await Stratagem.findByPk(id)

    await stratagem.destroy();

    res.status(204).end();
}))


module.exports = router;