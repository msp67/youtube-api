import { AxiosInstance } from 'axios';

export interface VideoDetailParams {
	videoId: string;
	gl?: string;
	hl?: string;
}

export interface VideoCommentsParams {
	videoId: string;
	sortBy?: 'TOP_COMMENTS' | 'NEWEST_FIRST';
	continuation?: string;
	gl?: string;
	hl?: string;
}

export interface VideoReplyCommentsParams {
	continuation: string;
	gl?: string;
	hl?: string;
}

export class VideoModule {
	constructor(private axios: AxiosInstance) {}

	/**
	 * Get detailed information about a YouTube video
	 * @param params - Video detail parameters
	 * @returns Video details including metadata, author, thumbnails, etc.
	 */
	async getDetail(params: VideoDetailParams) {
		const response = await this.axios.get('/api/v1/video/detail', {
			params: {
				videoId: params.videoId,
				gl: params.gl,
				hl: params.hl,
			},
		});
		return response.data;
	}

	/**
	 * Get comments for a YouTube video
	 * @param params - Video comments parameters
	 * @returns Video comments with pagination support
	 */
	async getComments(params: VideoCommentsParams) {
		const response = await this.axios.get('/api/v1/video/comments', {
			params: {
				videoId: params.videoId,
				sortBy: params.sortBy,
				continuation: params.continuation,
				gl: params.gl,
				hl: params.hl,
			},
		});
		return response.data;
	}

	/**
	 * Get reply comments for a specific comment
	 * @param params - Reply comments parameters (requires continuation token from parent comment)
	 * @returns Reply comments
	 */
	async getReplyComments(params: VideoReplyCommentsParams) {
		const response = await this.axios.get('/api/v1/video/reply-comments', {
			params: {
				continuation: params.continuation,
				gl: params.gl,
				hl: params.hl,
			},
		});
		return response.data;
	}
}

