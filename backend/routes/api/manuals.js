const express = require('express')
const asyncHandler = require('express-async-handler')
const {check} = require('express-validator')

const {Manual} = require('../../db/models')
const {handleValidationErrors} = require('../../utils/validation')
const {requireAuth} = require('../../utils/auth')

const router = express.Router();

const validateManual = [
    check('title')
        .exists({checkFalsy: true})
        .isLength({ max: 50 })
        .withMessage('manual title must be between 1 and 50 characters'),
        handleValidationErrors,
]

router.post('/', validateManual, requireAuth, asyncHandler(async (req, res) => {
    const {title} = req.body;
    // console.log(req.user)
    const userId = req.user.id 

    const newManual = await Manual.create({
        title,
        userId
    })

    res.json({newManual})

}))

router.get('/', requireAuth, asyncHandler(async (req, res) => {
    const userId = req.user.id

    const userManuals = await Manual.findAll({where: {userId}})
    const manuals = {}

    userManuals.forEach(manual => {
        manuals[manual.id] = manual;
    });

    res.json({manuals})
}))

router.put('/:id', validateManual, asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id)
    const manual = await Manual.findByPk(id)

    if(manual){
        manual.title = req.body.title
        await manual.save()
        res.json({manual})
    }
    else{
        const err = new Error(`Manual ${id} not found!`)
        err.status = 404    
        err.title = 'Manual Not Found'
        res.json({err})
    }
}))

router.delete('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id)
    const manual = await Manual.findByPk(id);

    await manual.destroy();
    
    res.status(204).end();
}))


module.exports = router