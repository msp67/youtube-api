# YouTube API Client

A TypeScript client library for the YouTube API. This library provides easy access to YouTube search, video details, channel information, and trending content.

## Installation

```bash
npm install youtube-api-v2
```

## Quick Start

```typescript
import { YouTubeClient } from "youtube-api-v2";

// Initialize the client with your API key
// Get your API key from: https://rapidapi.com/zilodata12-zilodata-default/api/youtube-scraper-api-v21
const client = new YouTubeClient({
  apiKey: "your-api-key-here",
});

// Search for videos
const searchResults = await client.explore.search({
  keyword: "funny videos",
  gl: "US",
  hl: "en",
});

// Get video details
const videoDetails = await client.video.getDetail({
  videoId: "kJQP7kiw5Fk",
});

// Get channel information
const channelInfo = await client.channel.getDetail({
  channelId: "UCxoq-PAQeAdk_zyg8YS0JqA",
});
```

## Configuration

```typescript
const client = new YouTubeClient({
  apiKey: "your-api-key", // Required: Your API subscription key
  timeout: 30000, // Optional: Request timeout in milliseconds (default: 30000)
});
```

**Get your API key:** [RapidAPI - YouTube Scraper API](https://rapidapi.com/zilodata12-zilodata-default/api/youtube-scraper-api-v21)

**API Documentation:** [ZiloData API Docs](https://docs.zilodata.com/api-reference/introduction)

**Note:** The API endpoint is hardcoded and cannot be changed.

## API Structure

The library is organized into modules, each providing specific functionality:

```
YouTubeClient
├── explore
│   ├── search(keyword, gl?, hl?, uploadDate?, type?, continuation?)
│   └── suggestions(keyword, gl?, hl?)
├── video
│   ├── getDetail(videoId, gl?, hl?)
│   ├── getComments(videoId, sortBy?, continuation?, gl?, hl?)
│   └── getReplyComments(continuation, gl?, hl?)
├── channel
│   ├── getDetail(channelId, gl?, hl?)
│   ├── getVideos(channelId, continuation?, gl?, hl?)
│   ├── getPlaylists(channelId, continuation?, gl?, hl?)
│   ├── getReleases(channelId, continuation?, gl?, hl?)
│   ├── getPosts(channelId, continuation?, gl?, hl?)
│   ├── getShorts(channelId, continuation?, gl?, hl?)
│   ├── getStore(channelId, continuation?, gl?, hl?)
│   └── search(channelId, keyword, continuation?, gl?, hl?)
└── trending
    ├── getVideo(countryCode?, gl?, hl?)
    ├── getTopVideo(filterByType?, filterByDate?, countryCode?, gl?, hl?)
    ├── getSong(countryCode?, filterByDate?, gl?, hl?)
    ├── getArtist(countryCode?, filterByDate?, gl?, hl?)
    └── getTopShortSong(countryCode?, filterByType?, filterByDate?, gl?, hl?)
```

## API Reference

### Explore Module

#### Search

Search for videos, movies, etc.

```typescript
await client.explore.search({
  keyword: "funny videos",
  gl: "US", // Optional: Geo location code
  hl: "en", // Optional: Language code
  uploadDate: "1_HOUR_AGO" | "TODAY" | "THIS_WEEK" | "THIS_MONTH" | "THIS_YEAR", // Optional
  type: "VIDEO" | "MOVIE", // Optional
  continuation: "token", // Optional: For pagination
});
```

**Example Response:**

```json
{
  "message": "Success",
  "statusCode": 200,
  "pagination": {
    "total": 100,
    "hasMore": true,
    "continuation": "CDsQ8FsiEwje95_F1pmRAxXlsykDHUX"
  },
  "data": {
    "contents": [
      {
        "author": {
          "avatar": {
            "url": "https://yt3.ggpht.com/Lw8D7ol21pLxWEDvnIwcV0DsXIA1d_6DK4_wlkTtaP7SEGBg-2FLRDvs57NPnE1DcNarWPkQpvs=s88-c-k-c0x00ffffff-no-rj",
            "width": 68,
            "height": 68
          },
          "badges": [
            {
              "type": "AUDIO_BADGE",
              "text": "Official Artist Channel"
            }
          ],
          "name": "Luis Fonsi"
        },
        "videoId": "kJQP7kiw5Fk",
        "channelId": "UCxoq-PAQeAdk_zyg8YS0JqA",
        "thumbnails": [
          {
            "url": "https://i.ytimg.com/vi/kJQP7kiw5Fk/hq720.jpg",
            "width": 360,
            "height": 202
          }
        ],
        "publishedTimeText": "8 years ago",
        "title": "Luis Fonsi - Despacito ft. Daddy Yankee",
        "views": 8871198622,
        "duration": "4:42",
        "url": "https://www.youtube.com/watch?v=kJQP7kiw5Fk"
      }
    ],
    "refinements": ["video", "music", "image"]
  }
}
```

#### Suggestions

Get search suggestions based on keyword.

```typescript
await client.explore.suggestions({
  keyword: "funny videos",
  gl: "US", // Optional
  hl: "en", // Optional
});
```

**Example Response:**

```json
{
  "message": "Success",
  "statusCode": 200,
  "data": [
    "funny videos",
    "funny videos try not to laugh",
    "funny videos 2025",
    "funny videos for kids",
    "funny videos animals",
    "funny videos impossible",
    "funny videos clean",
    "funny videos on youtube",
    "funny videos cats",
    "funny videos peppa pig",
    "funny videos dogs",
    "funny videos baby",
    "funny videos shorts",
    "funny videos bluey"
  ]
}
```

### Video Module

#### Get Detail

Get detailed information about a YouTube video.

```typescript
await client.video.getDetail({
  videoId: "kJQP7kiw5Fk",
  gl: "US", // Optional
  hl: "en", // Optional
});
```

**Example Response:**

```json
{
  "message": "Success",
  "statusCode": 200,
  "data": {
    "videoId": "kJQP7kiw5Fk",
    "title": "Luis Fonsi - Despacito ft. Daddy Yankee",
    "description": "Official video for \"Despacito\" by Luis Fonsi featuring Daddy Yankee",
    "author": {
      "id": "UCxoq-PAQeAdk_zyg8YS0JqA",
      "name": "Luis Fonsi",
      "thumbnails": [
        {
          "url": "https://yt3.ggpht.com/...",
          "width": 68,
          "height": 68
        }
      ],
      "subscriberCount": 1000000,
      "verified": true
    },
    "thumbnails": [
      {
        "url": "https://i.ytimg.com/vi/kJQP7kiw5Fk/hq720.jpg",
        "width": 360,
        "height": 202
      }
    ],
    "viewCount": 8871198622,
    "likeCount": 50000000,
    "published": "2017-01-13",
    "lengthSeconds": 282,
    "duration": "4:42",
    "isLive": false,
    "keywords": ["music", "despacito", "luis fonsi"],
    "downloadLinks": [
      {
        "itag": 18,
        "quality": "360p",
        "mime": "video/mp4; codecs=\"avc1.42001E, mp4a.40.2\"",
        "hasAudio": true,
        "url": "https://rr8---sn-42u-i5olk.googlevideo.com/videoplayback?..."
      }
    ]
  }
}
```

#### Get Comments

Get comments for a YouTube video.

```typescript
await client.video.getComments({
  videoId: "kJQP7kiw5Fk",
  sortBy: "TOP_COMMENTS" | "NEWEST_FIRST", // Optional
  continuation: "token", // Optional: For pagination
  gl: "US", // Optional
  hl: "en", // Optional
});
```

**Example Response:**

```json
{
  "message": "Success",
  "statusCode": 200,
  "pagination": {
    "total": 1000,
    "hasMore": true,
    "continuation": "UgyD..."
  },
  "data": {
    "comments": [
      {
        "id": "UgyD...",
        "author": {
          "id": "UCxoq-PAQeAdk_zyg8YS0JqA",
          "name": "John Doe",
          "thumbnails": [
            {
              "url": "https://yt3.ggpht.com/...",
              "width": 68,
              "height": 68
            }
          ],
          "verified": false
        },
        "text": "Great video!",
        "likeCount": 1000,
        "published": "2024-01-01",
        "publishedText": "2 days ago",
        "isPinned": false,
        "replyCount": 5,
        "continuationCommand": "Eg0SC0d5ckg2eGlGaVQwGAYygwEaUBIaVWd4djFBcjJ4TTJDZ0liZVJhVjRBYUFCQWciAggAKhhVQ3dKRHZ4NVlib3VDRVFfUlB3LU9SQlEyC0d5ckg2eGlGaVQwQAFICoIBAggBQi9jb21tZW50LXJlcGxpZXMtaXRlbS1VZ3h2MUFyMnhNMkNnSWJlUmFWNEFhQUJBZw%3D%3D"
      }
    ]
  }
}
```

#### Get Reply Comments

Get reply comments for a specific comment.

```typescript
await client.video.getReplyComments({
  continuation: "token", // Required: From parent comment
  gl: "US", // Optional
  hl: "en", // Optional
});
```

### Channel Module

#### Get Detail

Get detailed information about a YouTube channel.

```typescript
await client.channel.getDetail({
  channelId: "UCxoq-PAQeAdk_zyg8YS0JqA",
  gl: "US", // Optional
  hl: "en", // Optional
});
```

**Example Response:**

```json
{
  "message": "Success",
  "statusCode": 200,
  "data": {
    "channelId": "UC0IpGYsi1KVorZ7QVCHfdax",
    "title": "Davy Da Poet",
    "description": "Davy (24/05/1988) - singer/songwriter/rapper/producer...",
    "thumbnails": [
      {
        "url": "https://yt3.googleusercontent.com/...",
        "width": 900,
        "height": 900
      }
    ],
    "subscriberCount": 1880000,
    "videoCount": 167,
    "viewCount": 663779872,
    "verified": true,
    "channelUrl": "https://www.youtube.com/channel/UC0IpGYsi1KVorZ7QVCHfdag",
    "vanityChannelUrl": "http://www.youtube.com/@DavyDaPoet",
    "keywords": ["Davy", "Davy official", "Davy le"],
    "stats": {
      "subscribers": 1880000,
      "subscribersText": "1.88M subscribers",
      "videos": 167,
      "views": 663779872,
      "viewsText": "104.582.145 views"
    },
    "username": "@DavyDaPoet"
  }
}
```

#### Get Videos

Get videos from a channel.

```typescript
await client.channel.getVideos({
  channelId: "UCxoq-PAQeAdk_zyg8YS0JqA",
  continuation: "token", // Optional: For pagination
  gl: "US", // Optional
  hl: "en", // Optional
});
```

#### Get Playlists

Get playlists from a channel.

```typescript
await client.channel.getPlaylists({
  channelId: "UCxoq-PAQeAdk_zyg8YS0JqA",
  continuation: "token", // Optional
  gl: "US", // Optional
  hl: "en", // Optional
});
```

#### Get Releases

Get releases from a channel.

```typescript
await client.channel.getReleases({
  channelId: "UCxoq-PAQeAdk_zyg8YS0JqA",
  continuation: "token", // Optional
  gl: "US", // Optional
  hl: "en", // Optional
});
```

#### Get Posts

Get posts from a channel.

```typescript
await client.channel.getPosts({
  channelId: "UCxoq-PAQeAdk_zyg8YS0JqA",
  continuation: "token", // Optional
  gl: "US", // Optional
  hl: "en", // Optional
});
```

#### Get Shorts

Get shorts from a channel.

```typescript
await client.channel.getShorts({
  channelId: "UCxoq-PAQeAdk_zyg8YS0JqA",
  continuation: "token", // Optional
  gl: "US", // Optional
  hl: "en", // Optional
});
```

#### Get Store

Get store items from a channel.

```typescript
await client.channel.getStore({
  channelId: "UCxoq-PAQeAdk_zyg8YS0JqA",
  continuation: "token", // Optional
  gl: "US", // Optional
  hl: "en", // Optional
});
```

#### Search

Search within a channel.

```typescript
await client.channel.search({
  channelId: "UCxoq-PAQeAdk_zyg8YS0JqA",
  keyword: "search term",
  continuation: "token", // Optional
  gl: "US", // Optional
  hl: "en", // Optional
});
```

### Trending Module

#### Get Video

Get trending videos.

```typescript
await client.trending.getVideo({
  countryCode: "us", // Optional
  gl: "US", // Optional
  hl: "en", // Optional
});
```

**Example Response:**

```json
{
  "message": "Success",
  "statusCode": 200,
  "data": {
    "contents": [
      {
        "author": {
          "avatar": {
            "url": "https://i.ytimg.com/vi/JednRKQYhC4/default.jpg",
            "width": 120,
            "height": 90
          },
          "name": "Alofoke Music"
        },
        "videoId": "JednRKQYhC4",
        "channelId": "UCeDlzhpU8NZAlL1rsXp54zQ",
        "thumbnails": [
          {
            "url": "https://i.ytimg.com/vi/JednRKQYhC4/default.jpg",
            "width": 120,
            "height": 90
          }
        ],
        "publishedTimeText": "2 days ago",
        "releaseDate": {
          "year": 2025,
          "month": 11,
          "day": 29
        },
        "title": "MICHAEL FLORES X DANI BARRANCO X ALOFOKE MUSIC - AGUITA E COCO",
        "duration": "2:22",
        "songwriters": [],
        "songProducers": [],
        "url": "https://www.youtube.com/watch?v=JednRKQYhC4"
      }
    ]
  }
}
```

#### Get Top Video

Get top trending videos with chart positions.

```typescript
await client.trending.getTopVideo({
  filterByType: "DAILY" | "WEEKLY", // Optional
  filterByDate: "20251106", // Optional: Format YYYYMMDD
  countryCode: "us", // Optional
  gl: "US", // Optional
  hl: "en", // Optional
});
```

#### Get Song

Get trending songs.

```typescript
await client.trending.getSong({
  countryCode: "us", // Optional
  filterByDate: "20251106", // Optional: Format YYYYMMDD
  gl: "US", // Optional
  hl: "en", // Optional
});
```

#### Get Artist

Get trending artists.

```typescript
await client.trending.getArtist({
  countryCode: "us", // Optional
  filterByDate: "20251106", // Optional: Format YYYYMMDD
  gl: "US", // Optional
  hl: "en", // Optional
});
```

#### Get Top Short Song

Get top short trending songs.

```typescript
await client.trending.getTopShortSong({
  countryCode: "us", // Optional
  filterByType: "DAILY" | "WEEKLY", // Optional
  filterByDate: "20251106", // Optional: Format YYYYMMDD
  gl: "US", // Optional
  hl: "en", // Optional
});
```

## Error Handling

The client uses axios for HTTP requests. Errors will be thrown as axios errors:

```typescript
try {
  const result = await client.explore.search({ keyword: "test" });
} catch (error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.error("Error status:", error.response.status);
    console.error("Error data:", error.response.data);
  } else if (error.request) {
    // The request was made but no response was received
    console.error("No response received");
  } else {
    // Something happened in setting up the request
    console.error("Error:", error.message);
  }
}
```

## License

MIT
