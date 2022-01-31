---
title: "Nextjs and Auth0"
date: "Jan 27 2022"
desc: "Authentication with Nextjs and Auth0"
type: "Project"
cover_img: "/Blog/auth0.jpg"
auther: "Rohan Salunkhe"
---

# The easiest way to create authentication in 2 min with NextJs & Auth0

Aren't you sick of having to authenticate users with long codes and dirty back-end work?

Here's the quickest way to do it in under 2 minutes.

## Demo :

[Live Preview](https://auth0.amrohan.com)

## Setup

1.  Go to Auth0 [ Sign Up or Login](https://auth0.com/)

2.  Click on Applications

![Step 2 screenshot](https://res.cloudinary.com/amrohan/image/upload/v1643277234/Images/khtqov4vl3t0vhlrkrde.jpg)

3.  Click on Applications

![Step 3 screenshot](https://res.cloudinary.com/amrohan/image/upload/v1643277379/Images/busubmuuhaewrnatqj6c.jpg)

4.  Click on Create Application

![Step 4 screenshot](https://res.cloudinary.com/amrohan/image/upload/v1643277447/Images/cehpzo2mgolcuy7krala.jpg)

5.  Paste name of the app into input

![Step 5 screenshot](https://res.cloudinary.com/amrohan/image/upload/v1643277570/Images/mn41hnaqxqrmhh3bmchd.jpg)

6.  Click on Regular app

![Step 6 screenshot](https://res.cloudinary.com/amrohan/image/upload/v1643277606/Images/zajkcjjwhfuq4xcn40uq.png)

7.  Click on Create

![Step 7 screenshot](https://res.cloudinary.com/amrohan/image/upload/v1643277699/Images/qi8nu70lpuim9acewux5.jpg)

8.  Click on Settings

![Step 8 screenshot](https://res.cloudinary.com/amrohan/image/upload/v1643277781/Images/zefgsqk2tgaccbczbimx.jpg)

9.  Type `http://localhost:3000/api/auth/callback`

![Step 9 screenshot](https://res.cloudinary.com/amrohan/image/upload/v1643268006/Images/yhdwt1hczz56k9h6ns1u.png)

10. Type `http://localhost:3000`

![Step 10 screenshot](https://res.cloudinary.com/amrohan/image/upload/v1643277873/Images/zpfhsvbiq5a58mxs1gx4.jpg)

> Note when you will deploy this app you should change the url to
> `http://locahost:3000/api/auth/callback` to `http://yourdomain.com/api/auth/callback`
> Same for **Logout URL's**

11. Click on Save Changes

![Step 11 screenshot](https://res.cloudinary.com/amrohan/image/upload/v1643277951/Images/ppqui2vtj8v6b0whcqyz.jpg)

12. Scroll up take note of your `domain` , `client id` and `client secret`

![client](https://res.cloudinary.com/amrohan/image/upload/v1643266253/Images/uucxduvqgsizdb0bauwx.png)

---

## Now create a Nextjs App

1 . `yarn create next-app`

2 . Create **`.env.local`** and paste your secrets here

```txt
# A long, secret value used to encrypt the session cookie use any random 32 character string
AUTH0_SECRET = 'LONG_RANDOM_VALUE'

# The base url of your application
AUTH0_BASE_URL= 'http://localhost:3000'

# The url of your Auth0 tenant domain
AUTH0_ISSUER_BASE_URL = 'https://YOUR_AUTH0_DOMAIN.auth0.com'

# Your Auth0 application's Client ID
AUTH0_CLIENT_ID = 'YOUR_AUTH0_CLIENT_ID'

# Your Auth0 application's Client Secret
 AUTH0_CLIENT_SECRET = 'YOUR_AUTH0_CLIENT_SECRET'
```

3 . Install **@auth0/nextjs-auth0** SDK

```bash
npm install @auth0/nextjs-auth0
# Or
yarn add @auth0/nextjs-auth0
```

4 . Get your environment variables

5 . Step copy your secrets to `.env.local`

![Client Secrets](https://res.cloudinary.com/amrohan/image/upload/v1643265969/Images/mpomhav6oxnhosxjcjpg.png)

6 . Go to `pages/api/` create a new file `auth/[...auth0].js` this will create folder `auth` and file `[...auth0].js`

> `[...auth0]js` to catch all slug so we can use same route for login and logout

Now paste the following code in your `auth/[...auth0].js` file

```javascript
import { handleAuth } from "@auth0/nextjs-auth0";

export default handleAuth();
```

7.  Wrap your `pages/_app.js` component with the UserProvider component.

```javascript
// pages/_app.js
import React from "react";
import "../styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
```

8 . Now lets implement this inside our `pages/index.js` page

```javascript
// pages/index.js
import { useUser } from "@auth0/nextjs-auth0";

export default function Index() {
  const { user } = useUser();

  if (user) {
    return (
      <div>
        Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
      </div>
    );
  }

  return <a href="/api/auth/login">Login</a>;
}
```

9 . Now Run your nextjs app via

```bash
npm run dev
#Or
yarn dev
```

10 . Now you can login to your app and also be able to logout

![gif](https://res.cloudinary.com/amrohan/image/upload/v1643274460/Images/byh471jkezkslj75vcca.gif)

Walla your authentication is done 🎊🔥 .

---

## So you can see it in action, I've put some design to it.

![design](https://res.cloudinary.com/amrohan/image/upload/v1643275854/Images/virrwhulx38zuq5edsro.gif)

## Check out the [Github Repo](https://github.com/amrohan/nextjs-auth0)

### Live Demo :

[Auth0-Nextjs](https://auth0.amrohan.com)

Additional features, such as page protection and others, can be added.
Check out the official SDK repo for further information.

[Official SDK repo](https://github.com/auth0/nextjs-auth0)
