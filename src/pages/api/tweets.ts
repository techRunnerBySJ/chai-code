import { NextApiRequest, NextApiResponse } from 'next';

const TWITTER_BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;

interface TweetData {
  quote: string;
  name: string;
  handle: string;
  avatar: string;
  url: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!TWITTER_BEARER_TOKEN) {
    return res.status(500).json({ error: 'Twitter API token not configured' });
  }

  try {
    // Twitter user IDs to fetch
    const userIds = [
      '1234567890', // Replace with actual Twitter user IDs
      '0987654321',
      '1122334455',
      '5566778899'
    ];

    // Fetch user data from Twitter API
    const userData = await Promise.all(
      userIds.map(async (userId) => {
        const response = await fetch(
          `https://api.twitter.com/2/users/${userId}?user.fields=profile_image_url,name,username`,
          {
            headers: {
              Authorization: `Bearer ${TWITTER_BEARER_TOKEN}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Twitter API error: ${response.statusText}`);
        }

        const data = await response.json();
        return {
          quote: "Sample tweet content", // You can fetch actual tweets here
          name: data.data.name,
          handle: `@${data.data.username}`,
          avatar: data.data.profile_image_url.replace('_normal', ''), // Get full-size image
          url: `https://twitter.com/${data.data.username}`,
        };
      })
    );

    res.status(200).json(userData);
  } catch (error) {
    console.error('Error fetching Twitter data:', error);
    res.status(500).json({ error: 'Failed to fetch Twitter data' });
  }
} 