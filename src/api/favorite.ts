import { FavoriteVideo } from "../ts/video";

export const favoriteAll = async (username: string): Promise<any> => {
  const response = await fetch(
    `https://kvfirst.firstfirst.workers.dev/api/videos/${username}`
  );
  if (response.ok) {
    const responseJson = await response.json();
    // console.log(responseJson);
    return responseJson;
  } else {
    const responseJson = { success: false, videos: [] };
    // console.log(responseJson);
    return responseJson;
  }
}

export const favoriteDel = async (username: string, videoId: string): Promise<any> => {
    const url = `https://kvfirst.firstfirst.workers.dev/api/videos/${username}/del/${videoId}`;
    const response = await fetch(url, {
        method: 'PUT'
    });
    const responseJson = await response.json();
    return responseJson;
}

export const favoriteAdd = async (username: string, video: FavoriteVideo): Promise<any> => {
  const url = `https://kvfirst.firstfirst.workers.dev/api/videos/${username}`;
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(video),
  });
  const responseJson = await response.json();
  return responseJson;
};