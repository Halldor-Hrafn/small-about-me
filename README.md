# small-about-me

## Description
To be made

## Prerequisites
NodeJS version 18.8.0 preferably

Sqlite3 installed on the system

To be improved

## Installation
Here is the installation guide in 5.5 steps:

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

This command will do 4 things:
- It will create the `.env` file
- Echo into the `.env` file the string "`SESSION_SECRET={your session secret}`"
- It will create the `main.db` database file inside the `db` directory
- It will create tables inside the `main.db` database file

Step 4: Inside the `.env` file, replace the string "`{your session secret}` with your actual session secret. The secret is required since we are using `express-session.js` with our project.

Step 5: Run your app and have fun :)
```sh
node app.js
```

Optional: Run your app in developer mode (reduced security)
```sh
npm run dev
```

## Dockerizing
Here's how to dockerize this application in x simple steps:

Step 1: Install the application first (see [installation](https://github.com/Halldor-Hrafn/small-about-me/#installation) here)

Step 2: Run Docker and build your container :)
```sh
docker build -t {your-docker-username}/{your-app-name}:1.0 .
```

## a bit of story about the repository
So, you decided to read the entire doc? or just skipped to here after seeing "a bit of story about the repository" up at the top? I won't judge, but it is nice that you are here, so let me tell you a story, son, a story about a person with ADHD and a superiority complex whose trying to make a website he is proud of.
&ensp;&thinsp;&ensp;&thinsp;&ensp;&thinsp;The story starts about early October, where me in my Discord group chat asked my friends about what kind of features they would like to see in a website. Their requests were... interesting, to say the least, some of them were, a fap counter, which, I don't want my site to be related to pornography at all, so I will not do that. The second request was a feature to see sex offenders within a 2km radius of you, which, I admit, is not a bad idea at all, however, I am not sure how I would find an API that would allow me to find the locations of sex offenders. so I won't do that aswell (unless I change plans for some reason). The third request was to mirror some Reddit subreddits, which, I find it a fine idea, however then my site would just become Reddit. So the requests were all useless.  
&ensp;&thinsp;&ensp;&thinsp;&ensp;&thinsp;After asking them about some features and being met with nothing, I was just staring at my computer screen, with no ideas whatsoever. So, I did the most ADHD move in ADHD history, and completely forgot about the existence of this non-existent project for the next 2 months. But those 2 months didn't go to complete waste, I started making a final project for my computer science course in highschool, and with that I was armed with a lot more knowledge about the systems I was working with, that will help me a lot in the future aswell.

&ensp;&thinsp;&ensp;&thinsp;&ensp;&thinsp;It was then 2023 January 1st, and I had been looking through some server providers, one that got my curiosity was Linode, one where you can get full virtual Linux pc's in the cloud that you can interact with SSH, I thought it was pretty cool, but then I came across AWS Lambda, which I felt like it was a very good deal, and then... my friend told me about Netlify, which I thought was extremely good for its price of free. I had these 3 great options, but no website, so I thought to myself, now I shall make the website.  
&ensp;&thinsp;&ensp;&thinsp;&ensp;&thinsp;So I brainstormed in my brain and asked my friends what would be a good idea, I settled upon making an about me site, but I felt like that was not much... so it would have some extra functionality, it would be a chat app, the "about me" part would just be an extra, and so I decided upon that, the idea I thought about is what this repository is about, a website with an about me section and a chat function, but wether I will actually host it on any of the 3 server providers mentioned above is uncertain.

If you read til this line, please do give me a DM on Mastodon at @mrpottsuwu@fosstodon.org