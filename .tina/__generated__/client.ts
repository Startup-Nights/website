import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'd427ce3a726e278ef6c0a7d7c82fb3926fd3c6ac', queries,  });
export default client;
  