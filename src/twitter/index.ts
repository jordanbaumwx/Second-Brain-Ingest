import { Client } from 'twitter-api-sdk';
import { twitterBearerToken, twitterUsername } from '../EnvironmentService';

const client = new Client(twitterBearerToken);

async function main() {
  // This also works
  const user = await client.users.findUserByUsername(twitterUsername);
  if (!user || !user.data) {
    console.error('User not found');
    return;
  }
  const tweets = await client.tweets.usersIdLikedTweets(user.data.id);
  console.log(tweets);
}

main();
