This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install dependencies at the root of the project:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To run the tests, I recommend installing the Playwright Test for VSCode extension, but if you'd prefer to run the tests from the command line, run the following from the `./playwright` directory:

```
npx playwright test
```

## The task

Create an app where users can access documents that administrators have uploaded. Users can do the following...

    Display the files/folders
    Allow a user to open a folder to see it’s contents
    Sort by name/size/date
    Filter by filename
