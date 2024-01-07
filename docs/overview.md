# Overview

- [Tina Headless CMS](https://app.tina.io) for authentication, content modeling, visual editing and team management
- [External media provider (DigitalOcean Spaces)](https://tina.io/docs/reference/media/external/do-spaces/) to store media
- [Vercel](https://vercel.com) deployment to visually edit your site from the `/admin` route

## Development

- install the dependencies: `yarn install`
- copy `.env.example` to `.env.local` and update the variables
- run the server: `yarn dev`
- visit [https://localhost:3000](https://localhost:3000)

To test tito, a proxy is needed:

- run the ssl proxy: `yarn proxy` (https is required to show tito widget)
- visit [https://localhost:3001](https://localhost:3001)
