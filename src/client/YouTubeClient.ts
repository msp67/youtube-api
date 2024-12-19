import axios, { AxiosInstance } from "axios";
import { ExploreModule } from "../modules/explore";
import { VideoModule } from "../modules/video";
import { ChannelModule } from "../modules/channel";
import { TrendingModule } from "../modules/trending";

export interface YouTubeClientConfig {
  apiKey: string;
  timeout?: number;
}

const BASE_URL = "https://youtube-scraper-api-v21.p.rapidapi.com";
const RAPIDAPI_HOST = "youtube-scraper-api-v21.p.rapidapi.com";

export class YouTubeClient {
  private axiosInstance: AxiosInstance;
  public explore: ExploreModule;
  public video: VideoModule;
  public channel: ChannelModule;
  public trending: TrendingModule;

  constructor(config: YouTubeClientConfig) {
    if (!config.apiKey) {
      throw new Error("API key is required");
    }

    this.axiosInstance = axios.create({
      baseURL: BASE_URL,
      headers: {
        "x-rapidapi-key": config.apiKey,
        "x-rapidapi-host": RAPIDAPI_HOST,
        "Content-Type": "application/json",
      },
      timeout: config.timeout || 30000,
    });

    // Initialize modules
    this.explore = new ExploreModule(this.axiosInstance);
    this.video = new VideoModule(this.axiosInstance);
    this.channel = new ChannelModule(this.axiosInstance);
    this.trending = new TrendingModule(this.axiosInstance);
  }
}
