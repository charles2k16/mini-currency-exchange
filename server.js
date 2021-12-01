const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
// const cors = require('cors');

// Load env vars
dotenv.config({ path: './config.env' });

// Route files
const exchanges = require('./routes/exchanges');
const currencies = require('./routes/currencies');

const app = express();

// Body parser
app.use(express.json({ limit: '50mb' }));

// CORS
app.use(
  cors({
    origin: 'http://localhost:8080',
  })
);

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Rate limiting
const limiter = rateLimit({
  windowMs: 20 * 60 * 1000, // 10 mins
  max: 750,
});
app.use(limiter);

// Set static folder
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'frontend/dist')));

// Mount Routers
app.use('/api/exchange', exchanges);
app.use('/api/currencies', currencies);

const PORT = process.env.PORT || 8000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
