require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.static("public"));

// Spotify API credentials
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = process.env.SPOTIFY_REDIRECT_URI;

// Spotify Access Token URL
const tokenUrl = "https://accounts.spotify.com/api/token";

// Function to get the access token from Spotify
const getAccessToken = async () => {
  try {
    const response = await axios.post(
      tokenUrl,
      new URLSearchParams({
        grant_type: "client_credentials",
      }),
      {
        headers: {
          Authorization:
            "Basic " +
            Buffer.from(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64"),
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data.access_token;
  } catch (error) {
    console.error("Error getting access token: ", error);
    throw error;
  }
};

// Route to get the playlist's song list
app.get("/playlist", async (req, res) => {
  const playlistId = "3p6W2Hap3eHrvGGdXOUa0I";
  const token = await getAccessToken();

  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    res.json(response.data.items);
  } catch (error) {
    console.error("Error fetching playlist: ", error);
    res.status(500).json({ error: "Failed to fetch playlist" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
