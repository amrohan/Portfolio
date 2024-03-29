---
title: "Spotify Embedded Player"
date: "Aug 26 2021"
desc: "A Spotify-Api player is a music player that you can put in your github profile to make it appear 10 times better"
type: "Project"
cover_img: "/Blog/spotify.jpg"
auther : "Rohan Salunkhe"
---

# What is Spotify-Api player?

- A Spotify-Api player is a music player that you can put in your github profile to make it appear 10 times better.

## Demo :

[![Spotify](https://amrohann.vercel.app/api/spotify)](https://open.spotify.com/user/kgzfm4xv0udlhp30f5dhy2uci)

### Set Up Guide :

Fork the repo from my github [click me](https://github.com/amrohan/Spotify-Api)

## Spotify

- Create a [Spotify Application](https://developer.spotify.com/dashboard/applications)
- Take note of:
  - Client ID
  - Client Secret
- Click on **Edit Settings**
- In **Redirect URIs**:
  - Add http://localhost/callback/

## Refresh Token

- Navigate to the following URL:

```http
https://accounts.spotify.com/authorize?client_id={SPOTIFY_CLIENT_ID}&response_type=code&scope=user-read-currently-playing,user-read-recently-played&redirect_uri=http://localhost/callback/
```

- After logging in, save the {CODE} portion of: `http://localhost/callback/?code={CODE}`

- Create a string combining `{SPOTIFY_CLIENT_ID}:{SPOTIFY_CLIENT_SECRET}` (e.g. `5n7o4v5a3t7o5r2e3m1:5a8n7d3r4e2w5n8o2v3a7c5`) and **encode** into [Base64](https://base64.io/).

- Then run a [curl command](https://httpie.org/run) in the form of:

```bash
curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -H "Authorization: Basic {BASE64}" -d "grant_type=authorization_code&redirect_uri=http://localhost/callback/&code={CODE}" https://accounts.spotify.com/api/token
```

- Save the Refresh token

## Vercel

- Register on [Vercel](https://vercel.com/)

- Fork this repo, then create a vercel project linked to it

- Add Environment Variables:

```http
 https://vercel.com/<YourName>/<ProjectName>/settings/environment-variables/
```

    - SPOTIFY_REFRESH_TOKEN
    - SPOTIFY_CLIENT_ID
    - SPOTIFY_SECRET_ID

- Deploy!

#### How You Will Use?

You can now use the following in your readme file:

```txt
[![Spotify](https://USER_NAME.vercel.app/api/spotify)](https://open.spotify.com/user/USER_NAME)
```
