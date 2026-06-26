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
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { 
            font-family: Arial, sans-serif; text-align: center; 
            padding: 50px 20px; background: #f5f5f5; 
          }
          .card {
            max-width: 480px; margin: 0 auto; background: white;
            border-radius: 12px; padding: 2.5rem;
            box-shadow: 0 2px 12px rgba(0,0,0,0.1);
          }
          .emoji { font-size: 48px; margin-bottom: 16px; }
          h2 { margin-bottom: 8px; color: #333; }
          p { color: #555; margin-bottom: 24px; }
          .btn {
            display: block; width: 100%; padding: 14px; border: none;
            border-radius: 8px; font-size: 16px; cursor: pointer;
            margin-bottom: 12px; text-decoration: none; text-align: center;
          }
          .btn-primary { background: #4c87af; color: white; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="emoji">📵</div>
          <h2>Internet Expired</h2>
          <p>Your internet package has expired.<br/>Watch a short ad to get <strong>30 minutes</strong> of free internet.</p>
          <a href="https://ryanadsportal.vercel.app/ad-player?placement_id=wifi-portal&return_url=${returnUrl}" 
             class="btn btn-primary">
            ▶ Watch Ad For Free Internet
          </a>
        </div>
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
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { 
            font-family: Arial, sans-serif; text-align: center; 
            padding: 50px 20px; background: #f5f5f5; 
          }
          .card {
            max-width: 480px; margin: 0 auto; background: white;
            border-radius: 12px; padding: 2.5rem;
            box-shadow: 0 2px 12px rgba(0,0,0,0.1);
          }
          .emoji { font-size: 48px; margin-bottom: 16px; }
          h2 { margin-bottom: 8px; color: #333; }
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
            🌐 Browse the Internet (${currentMinutes} min)
          </a>
          <a href="https://ryanadsportal.vercel.app/ad-player?placement_id=wifi-portal&return_url=${returnUrlForNextAd}"
             class="btn btn-secondary">
            ▶ Watch Another Ad (+30 min → ${nextMinutes} total)
          </a>
        </div>
      </body>
    </html>
  `);
});

module.exports = app;

