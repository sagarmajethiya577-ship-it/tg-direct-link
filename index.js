const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/:id', (req, res) => {
    const msgId = req.params.id;
    const channel = process.env.CHANNEL_NAME;

    // Yeh header Chrome ko signal deta hai ki "Bhai, app mat kholo, file download karo"
    res.setHeader('Content-Disposition', `attachment; filename="MoviesZone_File_${msgId}.mkv"`);
    
    // Sabse bada bypass trick: embed link with download param
    const bypassUrl = `https://t.me/${channel}/${msgId}?embed=1&download=1`;
    
    res.redirect(bypassUrl);
});

app.get('/', (req, res) => {
    res.send('Movies Zone 04 Server is Running! Use /ID to download.');
});

app.listen(port, () => console.log(`Server is live on port ${port}`));
