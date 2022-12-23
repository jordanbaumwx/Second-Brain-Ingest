import snoowrap from 'snoowrap';
import {
  redditClientId,
  redditClientSecret,
  redditPassword,
  redditUsername,
} from '../EnvironmentService';

async function main() {
  const reddit = new snoowrap({
    userAgent: 'SecondBrain',
    clientId: redditClientId,
    clientSecret: redditClientSecret,
    username: redditUsername,
    password: redditPassword,
  });
  const savedContent = await reddit.getUser('jbokwxguy').getSavedContent();
  const postInformation = savedContent.map((post) => {
    if (post instanceof snoowrap.Submission) {
      return {
        title: post.title,
        body: post.selftext,
        created_at: post.created_utc,
        categories: post.content_categories,
        media: post.media,
      };
    } else if (post instanceof snoowrap.Comment) {
      return {
        body: post.body,
        created_at: post.created_utc,
      };
    }
  });
}

main();
