import * as dotenv from 'dotenv';

dotenv.config();

// Twitter Bearer Token
export const twitterBearerToken = process.env.TWITTER_BEARER_TOKEN || '';
export const twitterUsername = process.env.TWITTER_USERNAME || '';

// Reddit
export const redditClientId = process.env.REDDIT_CLIENT_ID || '';
export const redditClientSecret = process.env.REDDIT_CLIENT_SECRET || '';
export const redditUsername = process.env.REDDIT_USERNAME || '';
export const redditPassword = process.env.REDDIT_PASSWORD || '';

// Readwise
export const readwiseAccessToken = process.env.READWISE_TOKEN || '';
