import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
const port = 3000;

app.use(cookieParser());

app.use((req, res, next) => {
  res.set({
    'Access-Control-Allow-Origin': 'http://localhost:5000',
    'Access-Control-Allow-Credentials': true,
  });

  next();
});

app.get('/read-cookie', (req, res) => {
  res.status(200);
  res.json({
    message: req.cookies,
  });
});

app.get('/set-cookie', (req, res) => {
  res.cookie('testCookie', 'testCookie');

  res.status(200);
  res.json({
    message: 'success',
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
});
