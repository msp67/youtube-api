import { AxiosInstance } from 'axios';

export interface TrendingVideoParams {
	countryCode?: string;
	gl?: string;
	hl?: string;
}

export interface TopVideoParams {
	filterByType?: 'DAILY' | 'WEEKLY';
	filterByDate?: string; // Format: YYYYMMDD
	countryCode?: string;
	gl?: string;
	hl?: string;
}

export interface SongParams {
	countryCode?: string;
	filterByDate?: string; // Format: YYYYMMDD
	gl?: string;
	hl?: string;
}

export interface ArtistParams {
	countryCode?: string;
	filterByDate?: string; // Format: YYYYMMDD
	gl?: string;
	hl?: string;
}

export interface TopShortSongParams {
	countryCode?: string;
	filterByType?: 'DAILY' | 'WEEKLY';
	filterByDate?: string; // Format: YYYYMMDD
	gl?: string;
	hl?: string;
}

export class TrendingModule {
	constructor(private axios: AxiosInstance) {}

	/**
	 * Get trending videos based on geographical location
	 * @param params - Trending video parameters
	 * @returns Trending videos
	 */
	async getVideo(params: TrendingVideoParams) {
		const response = await this.axios.get('/api/v1/trending/video', {
			params: {
				countryCode: params.countryCode,
				gl: params.gl,
				hl: params.hl,
			},
		});
		return response.data;
	}

	/**
	 * Get top trending videos with chart positions
	 * @param params - Top video parameters
	 * @returns Top trending videos with ranking information
	 */
	async getTopVideo(params: TopVideoParams) {
		const response = await this.axios.get('/api/v1/trending/top-video', {
			params: {
				filterByType: params.filterByType,
				filterByDate: params.filterByDate,
				countryCode: params.countryCode,
				gl: params.gl,
				hl: params.hl,
			},
		});
		return response.data;
	}

	/**
	 * Get trending songs
	 * @param params - Song parameters
	 * @returns Trending songs with chart positions
	 */
	async getSong(params: SongParams) {
		const response = await this.axios.get('/api/v1/trending/song', {
			params: {
				countryCode: params.countryCode,
				filterByDate: params.filterByDate,
				gl: params.gl,
				hl: params.hl,
			},
		});
		return response.data;
	}

	/**
	 * Get trending artists
	 * @param params - Artist parameters
	 * @returns Trending artists with chart positions
	 */
	async getArtist(params: ArtistParams) {
		const response = await this.axios.get('/api/v1/trending/artist', {
			params: {
				countryCode: params.countryCode,
				filterByDate: params.filterByDate,
				gl: params.gl,
				hl: params.hl,
			},
		});
		return response.data;
	}

	/**
	 * Get top short trending songs
	 * @param params - Top short song parameters
	 * @returns Top short trending songs with chart positions
	 */
	async getTopShortSong(params: TopShortSongParams) {
		const response = await this.axios.get('/api/v1/trending/top-short-song', {
			params: {
				countryCode: params.countryCode,
				filterByType: params.filterByType,
				filterByDate: params.filterByDate,
				gl: params.gl,
				hl: params.hl,
			},
		});
		return response.data;
	}
}

