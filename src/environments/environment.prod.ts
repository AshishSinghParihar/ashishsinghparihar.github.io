import { VideoSourceEnum } from '../app/shared/enums/enums';

export const environment = {
  production: false,
  youTubeApiKey: '',
  youTubeApiUrl1: 'https://www.googleapis.com/youtube/v3/search',
  youTubeApiUrl: 'https://ashishsinghparihar.github.io/youtube-videos-db.json',
  mockVideoApiUrl: 'https://ashishsinghparihar.github.io/videos-db.json',
  videoSource: VideoSourceEnum.YOUTUBE,
};
