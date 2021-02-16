var jwt = require('jsonwebtoken');

module.exports = verifyAuth = (req,res,next) => {
    const token = req.header('token');
    if(!token) return res.status(401).send('token not provided');

    try{
        const verified = jwt.verify(token, process.env.SECRET_TOKEN);
        req.user.verified;
        next();
    } catch (err) {
        res.status(400).send('invalid token');
    }
}
