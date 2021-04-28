const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.get('/', (req, res) => {
    res.send('Hello, world.');
});

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/lists', require('./routes/api/lists'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`CONNECTED TO PORT ${PORT}`));
