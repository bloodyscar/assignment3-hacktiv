const jwt = require('jsonwebtoken');

const secretKey = 'MySecretKey';

function verifikasiToken(req, res, next) {
    const token = req.headers['authorization'];
    console.log(token)

    if (!token) {
        return res.status(403).json({ message: 'Response error karena tidak menyertakan authentikasi' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' });
        }

        next();
    });
}

function generateToken(payload) {
    return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}

module.exports = {
    verifikasiToken,
    generateToken
};
