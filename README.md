# small-about-me

## Description
To be made

## Prerequisites
You need the latest LTS version of NodeJS, since we are using the better-sqlite3 package, which isn't supported for node v19+ (as of creating this project)
rest to be made

## Installation
Step 1: clone the repository and go into the directory
```sh
git clone https://github.com/Halldor-Hrafn/small-about-me.git && cd small-about-me
```

Step 2: Install the neccessary node packages
```sh
npm install
```

Step 3: Set up the `.env` file and database file, you can do this with the setup npm script
```sh
npm run setup
```
This command will do 3 things, 1. create the `.env` file, 2. echo into the .env file the string "`SESSION_SECRET={your session secret}`", 3. it will create the `main.db` file in the `db` directory.

Step 4: replace "{your session secret}" with your actual session secret
since we are using `express-sessions.js` with our project we must provide a secret to encrypt our session, your best bet is to randomly generate a new one and store it in your `.env` file.

Step 5: Run your app and have fun :)
```sh
node app.js
```

Optional: Run your app in developer mode (reduced security)
```sh
npm run dev
```

## a bit of story about the repository
So, you decided to read til the end, huh? well, nice that you did, I wanted to write some stuff about this project because I like writing some long stuff on the README. So let me tell you a story about my grand project to create a website for myself. The project started when I got a bit curious and checked on Linode and AWS and saw that they had some pretty good deals on servicing websites, so I talked to my friend on Discord and he told me about Netlify, which seems to be a very good deal, and so I got to working on a barebone structure, I asked on a Discord groupchat for what interesting things they would want to see on the websites, and they gave some... interesting ideas, some notable examples are... a fap counter (why?), and a map that shows registered sex offenders in a 2km radius, which, ain't a bad idea, but I have no idea how I would get an API for that to work. another idea was to mirror some Reddit subreddits, which doesn't seem that bad but I can't find reliable API's for it. so here I was, staring at a computer screen with no ideas for what to have on the website, so I did the most ADHD thing ever and completely forgot about it for 2 months. it is now mid-December 2022 and now I got a spark of motivation to make it, and so I got to work again, but... I wasn't satisfied at all whatsoever, and so procrastinated, like a person with ADHD would do. It was also at this time when I recently got a Mastodon account and started posting some.. posts? is that what you call them on Mastodon? anyways, that doesn't matter, that brings us to today (1st of January 2023), and I am writing this story that probably no one would read anyways, but hey, if you the reader are reading this, do give me a DM on Mastodon at @mrpottsuwu@fosstodon.org , I will be glad to hear that you read this completely useless story :)