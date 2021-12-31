---
title: "Chat App using Nextjs"
date: " Aug 12 2021"
desc: "Chathub is a gruoup chat app made by amrohan aka rohan salunkhe using firabse and next js."
type: "Project"
cover_img: "http://res.cloudinary.com/amrohan/image/upload/v1640966009/Images/luqtkuioib1slbbwgak4.jpg"
---

# Chat-Hub

Chat-Hub is a free open source chat room built with React Js with Firebase as the backend.

## Live Demo:

Website Link 👉 [Click Me](https://chat-hub.rohan.ml)

### Screenshots :

![Chat hub screenshot](/Images/chathub.webp)

#### Installation :

1. Run this on local machine ?

   Clone this repository

   ```bash
    git clone https://github.com/amrohan/Chat-Hub
   ```

2. Install all packages :

   `npm install or yarn install`

3. Runs the app in the development mode.

   `npm start`

   Open `http://localhost:3000` to view it in the browser.

4. Create an.env file in the root directory and add your firebase config tokens there, or hard code it in firebase. initializeApp <br/>
   _NOTE :&nbsp; In the assign variable, put your firebase key values._

   ```txt
   REACT_APP_apiKey = apiKey
   REACT_APP_authDomain = authDomain
   REACT_APP_projectId = projectId
   REACT_APP_storageBucket = storageBucket
   REACT_APP_messagingSenderId = messagingSenderId
   REACT_APP_appId = appId
   REACT_APP_measurementId = measurementId
   ```

5. Create a firebase web app and a firebase store database, then paste the firebase config token into [`firebase-chat/src/App.js`](src/App.js#L12)

   ```js
   firebase.initializeApp({
     apiKey: "process.env.apiKey",
     authDomain: "process.env.authDomain",
     projectId: "process.env.projectId",
     storageBucket: "process.env.storageBucket",
     messagingSenderId: "process.env.messagingSenderId",
     appId: "process.env.appId",
     measurementId: "process.env.measurementId",
   });
   ```

6. Deploy it on any of your favourite website hosting services.
   1. [Netlify](https://netlify.com)
   2. [Vercel](https://vercel.com)
   3. [Cloudflare Pages](https://pages.cloudflare.com/)
   4. [Firebase hosting](https://firebase.google.com/)
   5. [Render](https://render.com/)

Enjoy everything is working now ✨
