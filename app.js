
const cors = require('cors');
const express = require('express');
const blogRoutes = require('./routes/blogRoutes');

//middleware
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/blogs', blogRoutes);

module.exports = app;

