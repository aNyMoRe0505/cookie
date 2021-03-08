import express from 'express';
import cookieParser from 'cookie-parser';
import https from 'https';
import fs from 'fs';

const app = express();
const port = 443;

app.use(cookieParser());

app.use((req, res, next) => {
  res.set({
    'Access-Control-Allow-Origin': 'https://f5f7b9dd85bf.ngrok.io',
    'Access-Control-Allow-Credentials': true,
  });

  next();
});

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/read-cookie', (req, res) => {
  res.status(200);
  res.json({
    message: req.cookies,
  });
});

app.get('/set-cookie', (req, res) => {
  res.cookie('testCookie', 'testCookie', {
    sameSite: 'none',
    secure: true,
  });

  res.status(200);
  res.json({
    message: 'success',
  });
});

https
  .createServer(
    {
      key: fs.readFileSync('./localhost-key.pem'),
      cert: fs.readFileSync('./localhost.pem'),
    },
    app,
  )
  .listen(port, (err) => {
    if (err) throw err;
  });
