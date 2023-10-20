const express = require('express');
const bodyParser = require('body-parser');
const photoRoutes = require('./src/photos/routes');
const userRoutes = require('./src/user/routes');
const app = express();
const port = 3000;



app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello World!");
})

app.use('/photos', photoRoutes);
app.use('/users', userRoutes);


// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });


module.exports = app