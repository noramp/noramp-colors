# NoRamp One Click Demo App - Colors On Chain by NoRamp

## Getting Started

Install dependencies:

```bash
yarn install
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

Once you have the project running locally you can [import](https://vercel.com/import/git) your project to Vercel and get it up and running in a few clicks.

Other option is to click on the button below to create a new repository that look exactly like this one, and sets it up and running on Vercel.

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/noramp/noramp-demo-app/tree/main)

## Setup env variables

To setup env variables on vercel you can folllow this guide: https://vercel.com/docs/concepts/projects/environment-variables

Setup the following variables

`NEXT_PUBLIC_APP_URL=http://localhost:3000`

> Your app url

`NORAMP_API_URL=https://api-testnet.noramp.io`

> NoRamp API URL (use https://api.noramp.io for production)

`NORAMP_API_KEY={YOUR_API_KEY}`

> Copy from https://testnet.noramp.io/settings/api-key

`NEXT_PUBLIC_NORAMP_APP_ID={YOUR_APP_ID}`

> Copy from https://testnet.noramp.io/apps/dashboard

`NEXT_PUBLIC_NORAMP_TRIGGER_ID={YOUR_TRIGGER_ID}`

> Create and copy the id from https://testnet.noramp.io/apps/triggers

`NEXT_PUBLIC_NORAMP_EMBED_URL=https://testnet.noramp.io`

> NoRamp URL (use https://app.noramp.io for production)
