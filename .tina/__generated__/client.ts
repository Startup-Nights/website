import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '4cf32ca2ca58ddef6eb7254c2d79cde98dfa1274', queries,  });
export default client;
  