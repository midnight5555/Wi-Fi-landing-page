 res.send(`
    <html>
      <head>
        <title>Reward</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; padding: 50px; background: #f5f5f5; }
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
          .time { font-size: 28px; font-weight: bold; color: #4c87af; }
          p { color: #555; margin-bottom: 32px; }
          .btn {
            display: block;
            width: 100%;
            padding: 14px;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            cursor: pointer;
            margin-bottom: 12px;
            text-decoration: none;
            text-align: center;
          }
          .btn-primary { background: #4c87af; color: white; }
          .btn-secondary { background: #f0f0f0; color: #333; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="emoji">🎉</div>
          <h2>Ad Complete!</h2>
          <p>You've earned <span class="time">${currentMinutes} minutes</span> of free internet. What would you like to do?</p>

          <!-- Use Free Internet: goes to Google (or any normal site) -->
          <a href="https://www.google.com" class="btn btn-primary">
            Use Free Internet (${currentMinutes} min)
          </a>

          <!-- Watch another ad: adds 30 more minutes -->
          <a href="https://ryanadsportal.vercel.app/ad-player?placement_id=wifi-portal&return_url=${returnUrlForNextAd}" 
             class="btn btn-secondary">
            Watch Another Ad (+30 min)
          </a>
        </div>
      </body>
    </html>
  `);
});

app.listen(3004, '0.0.0.0', () => {
  console.log(`Portal running — return URL will be: ${PORTAL_HOST}/reward`);
});
