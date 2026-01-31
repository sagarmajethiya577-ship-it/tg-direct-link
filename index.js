const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/:id', (req, res) => {
    const msgId = req.params.id;
    const channel = process.env.CHANNEL_NAME;
    const downloadUrl = `https://t.me/${channel}/${msgId}?download=1`;

    res.send(`
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Downloading...</title>
        </head>
        <body style="background:#0f172a; color:white; font-family:sans-serif; text-align:center; padding-top:100px;">
          <h2>Movies Zone 04</h2>
          <p>Your download should start automatically.</p>
          <p>If not, <a id="dlLink" href="${downloadUrl}" style="color:#10b981; font-weight:bold;">Click Here</a></p>
          
          <script>
            // Yeh script Chrome ko dhoka degi aur direct download trigger karegi
            window.onload = function() {
              const link = document.getElementById('dlLink');
              // Force click simulation
              link.click();
              
              // Second attempt for Chrome mobile
              setTimeout(() => {
                window.location.href = "${downloadUrl}";
              }, 500);
            };
          </script>
        </body>
      </html>
    `);
});

app.listen(port, () => console.log('Bypass Server Running!'));
