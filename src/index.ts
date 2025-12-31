export { YouTubeClient } from './client/YouTubeClient';
export type { YouTubeClientConfig } from './client/YouTubeClient';

// Export module types
export type {
	SearchParams,
	SuggestionsParams,
} from './modules/explore';

export type {
	VideoDetailParams,
	VideoCommentsParams,
	VideoReplyCommentsParams,
} from './modules/video';

export type {
	ChannelDetailParams,
	ChannelVideosParams,
	ChannelSearchParams,
} from './modules/channel';

export type {
	TrendingVideoParams,
	TopVideoParams,
	SongParams,
	ArtistParams,
	TopShortSongParams,
} from './modules/trending';

