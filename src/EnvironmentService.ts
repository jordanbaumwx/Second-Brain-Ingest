import * as dotenv from 'dotenv';

dotenv.config();

// Twitter Bearer Token
export const twitterBearerToken = process.env.TWITTER_BEARER_TOKEN || '';
export const twitterUsername = process.env.TWITTER_USERNAME || '';
