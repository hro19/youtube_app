export type Video = {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    publishedAt: string;
    channelId: string;
    channelTitle: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
};
