const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 8080;

// Render par aapke variables se ye uthayega
const BOT_TOKEN = process.env.TG_BOT_TOKEN;
const CHANNEL = process.env.CHANNEL_NAME;

app.get('/:id', async (req, res) => {
    const msgId = req.params.id;
    // Yeh link Telegram ke anonymous server se file stream karega
    const streamUrl = `https://t.me/s/${CHANNEL}/${msgId}`;
    
    // Chrome ko bypass karne ke liye direct stream headers
    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader('Content-Disposition', `attachment; filename="MoviesZone_${msgId}.mkv"`);
    
    // Direct Redirect to Telegram's File Server (Bypassing the App trigger)
    res.redirect(`https://t.me/${CHANNEL}/${msgId}?download=1`);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
