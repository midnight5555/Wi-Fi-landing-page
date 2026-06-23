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
        <button onclick="window.location='https://ryanadsportal.vercel.app/ad-player?placement_id=wifi-portal&return_url=https://example.com'">
          Watch Ad For Free Internet
        </button>
      </body>
    </html>
  `);
});

app.get('/reward', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Reward</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
          .card {
            max-width: 480px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            padding: 2.5rem;
            box-shadow: 0 2px 12px rgba(0,0,0,0.1);
          }
          .emoji { font-size: 48px; margin-bottom: 16px; }
          h2 { margin: 0 0 8px; }
          p { color: #888; margin-bottom: 32px; }
          .btn {
            display: block;
            width: 100%;
            padding: 14px;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            cursor: pointer;
            margin-bottom: 12px;
          }
          .btn-primary { background: #4c87af; color: white; }
          .btn-secondary { background: #f0f0f0; color: #333; }
        </style>
      </head>
      <body style="background: #f5f5f5;">
        <div class="card">
          <div class="emoji">🎉</div>
          <h2>Ad Complete!</h2>
          <p>You've earned <strong>30 minutes</strong> of free internet. What would you like to do?</p>
          <button class="btn btn-primary" onclick="alert('Enjoy your 30 minutes of free internet!')">
            Use Free Internet (30 min)
          </button>
          <button class="btn btn-secondary" onclick="window.location='https://ryanadsportal.vercel.app/ad-player?placement_id=wifi-portal&return_url=https://example.com'">
            Watch Another Ad (+30 min)
          </button>
        </div>
      </body>
    </html>
  `);
});

app.listen(3004, '0.0.0.0', () => {
  console.log('Portal running on localhost:3004');
});
