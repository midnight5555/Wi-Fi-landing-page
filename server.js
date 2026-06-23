const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Free Internet Portal</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
          button { 
            background: #4c87af; color: white; padding: 15px 30px; 
            border: none; border-radius: 8px; font-size: 18px; cursor: pointer; 
          }
        </style>
      </head>
      <body>
        <h1>Welcome</h1>
        <p>Your internet package has expired.</p>
        <button onclick="window.location='http://localhost:5173/watch-ad'">
          Watch Ad For Free Internet
        </button>
      </body>
    </html>
  `);
});

app.listen(3004, '0.0.0.0', () => {
  console.log('Portal running on localhost:3004');
});
