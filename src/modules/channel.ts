import { AxiosInstance } from 'axios';

export interface ChannelDetailParams {
	channelId: string;
	gl?: string;
	hl?: string;
}

export interface ChannelVideosParams {
	channelId: string;
	continuation?: string;
	gl?: string;
	hl?: string;
}

export interface ChannelSearchParams {
	channelId: string;
	keyword: string;
	continuation?: string;
	gl?: string;
	hl?: string;
}

export class ChannelModule {
	constructor(private axios: AxiosInstance) {}

	/**
	 * Get detailed information about a YouTube channel
	 * @param params - Channel detail parameters
	 * @returns Channel details including stats, thumbnails, description, etc.
	 */
	async getDetail(params: ChannelDetailParams) {
		const response = await this.axios.get('/api/v1/chanel/detail', {
			params: {
				channelId: params.channelId,
				gl: params.gl,
				hl: params.hl,
			},
		});
		return response.data;
	}

	/**
	 * Get videos from a channel
	 * @param params - Channel videos parameters
	 * @returns Channel videos with pagination support
	 */
	async getVideos(params: ChannelVideosParams) {
		const response = await this.axios.get('/api/v1/chanel/videos', {
			params: {
				channelId: params.channelId,
				continuation: params.continuation,
				gl: params.gl,
				hl: params.hl,
			},
		});
		return response.data;
	}

	/**
	 * Get playlists from a channel
	 * @param params - Channel playlists parameters
	 * @returns Channel playlists with pagination support
	 */
	async getPlaylists(params: ChannelVideosParams) {
		const response = await this.axios.get('/api/v1/chanel/playlists', {
			params: {
				channelId: params.channelId,
				continuation: params.continuation,
				gl: params.gl,
				hl: params.hl,
			},
		});
		return response.data;
	}

	/**
	 * Get releases from a channel
	 * @param params - Channel releases parameters
	 * @returns Channel releases with pagination support
	 */
	async getReleases(params: ChannelVideosParams) {
		const response = await this.axios.get('/api/v1/chanel/releases', {
			params: {
				channelId: params.channelId,
				continuation: params.continuation,
				gl: params.gl,
				hl: params.hl,
			},
		});
		return response.data;
	}

	/**
	 * Get posts from a channel
	 * @param params - Channel posts parameters
	 * @returns Channel posts with pagination support
	 */
	async getPosts(params: ChannelVideosParams) {
		const response = await this.axios.get('/api/v1/chanel/posts', {
			params: {
				channelId: params.channelId,
				continuation: params.continuation,
				gl: params.gl,
				hl: params.hl,
			},
		});
		return response.data;
	}

	/**
	 * Get shorts from a channel
	 * @param params - Channel shorts parameters
	 * @returns Channel shorts with pagination support
	 */
	async getShorts(params: ChannelVideosParams) {
		const response = await this.axios.get('/api/v1/chanel/shorts', {
			params: {
				channelId: params.channelId,
				continuation: params.continuation,
				gl: params.gl,
				hl: params.hl,
			},
		});
		return response.data;
	}

	/**
	 * Get store items from a channel
	 * @param params - Channel store parameters
	 * @returns Channel store items with pagination support
	 */
	async getStore(params: ChannelVideosParams) {
		const response = await this.axios.get('/api/v1/chanel/store', {
			params: {
				channelId: params.channelId,
				continuation: params.continuation,
				gl: params.gl,
				hl: params.hl,
			},
		});
		return response.data;
	}

	/**
	 * Search within a channel
	 * @param params - Channel search parameters
	 * @returns Search results within the channel with pagination support
	 */
	async search(params: ChannelSearchParams) {
		const response = await this.axios.get('/api/v1/chanel/search', {
			params: {
				channelId: params.channelId,
				keyword: params.keyword,
				continuation: params.continuation,
				gl: params.gl,
				hl: params.hl,
			},
		});
		return response.data;
	}
}

