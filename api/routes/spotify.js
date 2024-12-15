const express = require('express');
const router = express.Router();
const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    redirectUri: process.env.REDIRECT_URI
});

// Test route
router.get('/test', (req, res) => {
    res.json({ message: 'API is working!' });
});

// Get playlist tracks
router.post('/playlist', async (req, res) => {
    try {
        const { playlistUrl } = req.body;
        // Spotify logic will go here
        res.json({ success: true, playlistUrl });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;