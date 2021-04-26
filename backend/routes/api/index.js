const router = require('express').Router();

const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const manualsRouter = require('./manuals.js')
const stratagemsRouter = require('./stratagems')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);
router.use('/manuals', manualsRouter)
router.use('/stratagems', stratagemsRouter)









//tests ------------------------------------------------------------------------

// const asyncHandler = require('express-async-handler');
// const { setTokenCookie } = require('../../utils/auth.js');
// const { restoreUser } = require('../../utils/auth.js');
// const { requireAuth } = require('../../utils/auth.js');
// const { User } = require('../../db/models');

// router.post('/test', function(req, res) {
//     res.json({requestBody: req.body})
// })

// //test token
// router.get('/set-token-cookie', asyncHandler(async (req, res) => {
//     const user = await User.findOne({
//         where: {
//             username: 'Demo-lition'
//         },
//     })
//     setTokenCookie(res, user);
//     return res.json({ user });
// }));

// //test restore user
// router.get(
//     '/restore-user',
//     restoreUser,
//     (req, res) => {
//         return res.json(req.user);
//     }
// );

// //test req auth
// router.get(
//     '/require-auth',
//     requireAuth,
//     (req, res) => {
//         return res.json(req.user);
//     }
// );

module.exports = router;