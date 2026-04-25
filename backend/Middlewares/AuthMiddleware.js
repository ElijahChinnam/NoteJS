const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {

    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).send({ message: 'No token provided' });
        }
        const token = authHeader.split(' ')[1];

        const decoded = jwt.verify(token, 'key');

        req.user = decoded;

        next();

    } catch (error) {
        return res.status(401).send({ message: 'Invalid token' });
    }

}

module.exports = authMiddleware;