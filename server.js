const express = require('express');
// const connectDB = require('./config/db');

const app = express();

//Connect Database
// connectDB();

//Init Middleware
// app.use(express.json({
//     extended: false
// }));

app.get('/', (req, res) =>
    res.json({ msg: 'welcome to the Member Manage API...' })
);

// //Define Routes
app.use('/api/members', require('./routes/members'));
app.use('/api/rewards', require('./routes/rewards'));
// app.use('/api/mbreward', require('./routes/mbreward'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));