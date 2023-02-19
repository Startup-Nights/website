# Website

## Features

- [Tina Headless CMS](https://app.tina.io) for authentication, content modeling, visual editing and team management.
- [External media provider (DigitalOcean Spaces)](https://tina.io/docs/reference/media/external/do-spaces/)
- [Vercel](https://vercel.com) deployment to visually edit your site from the `/admin` route.
- Local development workflow from the filesystem with a local GraqhQL server.

## Requirements

- Git, [Node.js Active LTS](https://nodejs.org/en/about/releases/), Yarn installed for local development.
- A [TinaCMS](https://app.tina.io) account for live editing.

## Local Development

- install the dependencies: `yarn install`
- copy `.env.example` to `.env.local` and update the variables
- source the variables: `source .env.local`
- run the server: `yarn dev`

### Local URLs

- http://localhost:3000 : browse the website
- http://localhost:3000/admin : connect to Tina Cloud and go in edit mode
- http://localhost:3000/exit-admin : log out of Tina Cloud
- http://localhost:4001/altair/ : GraphQL playground to test queries and browse the API documentation

## LICENSE

Licensed under the [Apache 2.0 license](./LICENSE).
