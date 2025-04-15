import { VideoSourceEnum } from '../app/shared/enums/enums';

export const environment = {
  production: false,
  youTubeApiKey: '',
  youTubeApiUrl: 'https://www.googleapis.com/youtube/v3/search',
  mockVideoApiUrl: 'https://ashishsinghparihar.github.io/videos-db.json',
  videoSource: VideoSourceEnum.YOUTUBE,
};
