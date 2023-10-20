const { comparePassword } = require('../../bcrypt');
const pool = require('../../config');
const { generateToken } = require('../../middleware');
const { User } = require('../../models')


const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const existingUser = await User.findOne({
            where: {
                username
            }
        });

        if (existingUser) {
            return res.status(400).json({ error: 'Username is already taken' });
        }

        const newUser = await User.create({
            username,
            email,
            password
        });

        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const loginUser = async (req, res) => {
    try {
        const { username, email, password } = req.body

        const user = await User.findOne({
            where: {
                username
            }
        });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const compare = comparePassword(password, user.password)
        if (!compare) {
            throw {
                name: "User login error",
                message: `User's password with username ${username}, does not match!`
            }
        }

        let result = {
            id: user.id,
            username: user.username,
            email: user.email
        }

        const token = generateToken(result)

        res.status(200).json({ token: token });
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    loginUser,
    registerUser
}