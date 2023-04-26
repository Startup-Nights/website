# Website

## Features

- [Tina Headless CMS](https://app.tina.io) for authentication, content modeling, visual editing and team management
- [External media provider (DigitalOcean Spaces)](https://tina.io/docs/reference/media/external/do-spaces/) to store media
- [Vercel](https://vercel.com) deployment to visually edit your site from the `/admin` route
- Local development workflow from the filesystem with a local GraqhQL server

## Requirements and integrations

- `git`, `nodejs` and `yarn` installed for local development
- [TinaCMS](https://app.tina.io) account for live editing
- [DigitalOcean](https://www.digitalocean.com) account to manage the object storage
- [Vercel](https://vercel.com) account to manage environment variables, domains and deployments
- [Mailchimp](https://mailchimp.com/) account to manage the newsletter list and merge fields

```mermaid
stateDiagram-v2
    app.tina.io --> website: edit
    website --> github: update content\n(via commit)
    github --> vercel: trigger deployment\n(on commit)
    vercel --> website: update website
    website --> mailchimp: sign up for\nnewsletter
    website --> digitalocean_spaces: store images
```

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

## Notes

The website uses images that are loaded from DigitalOcean. This means that it 
can't optimize images on build time, which leads to potential costs. The 
pricing can be found [here](https://vercel.com/docs/concepts/limits/overview#typical-monthly-usage-guidelines).

According to the definition of a [source image](https://vercel.com/docs/concepts/image-optimization#source-images),
we shouldn't run into this issue unless we have a lot of images.

If this definition / interpretation is not accurate, we may stil.l be able to 
circumvent it by using a high [`miminumCacheTTL`](https://nextjs.org/docs/api-reference/next/image#minimum-cache-ttl).

### Structure

- `components/blocks` contains the "whole" blocks that the user can select
- `components/items` are parts of blocks - sometimes also nested!

## LICENSE

Licensed under the [Apache 2.0 license](./LICENSE).
