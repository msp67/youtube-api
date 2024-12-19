import { AxiosInstance } from 'axios';

export interface SearchParams {
	keyword: string;
	gl?: string;
	hl?: string;
	uploadDate?: '1_HOUR_AGO' | 'TODAY' | 'THIS_WEEK' | 'THIS_MONTH' | 'THIS_YEAR';
	type?: 'VIDEO' | 'MOVIE';
	continuation?: string;
}

export interface SuggestionsParams {
	keyword: string;
	gl?: string;
	hl?: string;
}

export class ExploreModule {
	constructor(private axios: AxiosInstance) {}

	/**
	 * Search for videos, movies, etc.
	 * @param params - Search parameters
	 * @returns Search results with pagination
	 */
	async search(params: SearchParams) {
		const response = await this.axios.get('/api/v1/search', {
			params: {
				keyword: params.keyword,
				gl: params.gl,
				hl: params.hl,
				uploadDate: params.uploadDate,
				type: params.type,
				continuation: params.continuation,
			},
		});
		return response.data;
	}

	/**
	 * Get search suggestions based on keyword
	 * @param params - Suggestion parameters
	 * @returns Array of suggestion strings
	 */
	async suggestions(params: SuggestionsParams) {
		const response = await this.axios.get('/api/v1/suggestions', {
			params: {
				keyword: params.keyword,
				gl: params.gl,
				hl: params.hl,
			},
		});
		return response.data;
	}
}

