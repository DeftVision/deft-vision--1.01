require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoute');
const port = process.env.PORT || 7001;
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/user', userRoutes);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})