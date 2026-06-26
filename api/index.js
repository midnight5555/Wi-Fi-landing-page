const express = require('express');
const app = express();

const PORTAL_HOST = 'https://rewards-analytics.vercel.app';

app.get('/', (req, res) => {
  const returnUrl = encodeURIComponent(`${PORTAL_HOST}/reward?minutes=30`);

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
        <button onclick="window.location='https://ryanadsportal.vercel.app/ad-player?placement_id=wifi-portal&return_url=${returnUrl}'">
          Watch Ad For Free Internet
        </button>
      </body>
    </html>
  `);
});

app.get('/reward', (req, res) => {
  const currentMinutes = parseInt(req.query.minutes) || 30;
  const nextMinutes = currentMinutes + 30;

  const returnUrlForNextAd = encodeURIComponent(
    `${PORTAL_HOST}/reward?minutes=${nextMinutes}`
  );

  res.send(`
    <html>
      <head>
        <title>Reward</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background: #f5f5f5; }
          .card {
            max-width: 480px; margin: 0 auto; background: white;
            border-radius: 12px; padding: 2.5rem;
            box-shadow: 0 2px 12px rgba(0,0,0,0.1);
          }
          .emoji { font-size: 48px; margin-bottom: 16px; }
          h2 { margin: 0 0 8px; }
          .time { font-size: 28px; font-weight: bold; color: #4c87af; }
          p { color: #555; margin-bottom: 24px; }
          .btn {
            display: block; width: 100%; padding: 14px; border: none;
            border-radius: 8px; font-size: 16px; cursor: pointer;
            margin-bottom: 12px; text-decoration: none; text-align: center;
          }
          .btn-primary { background: #4c87af; color: white; }
          .btn-secondary { background: #f0f0f0; color: #333; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="emoji">🎉</div>
          <h2>Ad Complete!</h2>
          <p>You've earned <span class="time">${currentMinutes} minutes</span> of free internet.</p>
          <a href="https://www.google.com" class="btn btn-primary">
            Browse the Internet
          </a>
          <a href="https://ryanadsportal.vercel.app/ad-player?placement_id=wifi-portal&return_url=${returnUrlForNextAd}"
             class="btn btn-secondary">
            Watch Another Ad (+30 min → ${nextMinutes} total)
          </a>
        </div>
      </body>
    </html>
  `);
});

module.exports = app;

