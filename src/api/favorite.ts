export const favoriteAll = async (username: string): Promise<any> => {
    console.log(username);
    const response = await fetch(
      `https://kvfirst.firstfirst.workers.dev/api/videos/${username}`
    );
    const responseJson = await response.json();
    // console.log(responseJson);
    return responseJson;
}

export const favoriteDel = async (username: string, videoId: string): Promise<any> => {
    const url = `https://kvfirst.firstfirst.workers.dev/api/videos/${username}/del/${videoId}`;
    const response = await fetch(url, {
        method: 'PUT'
    });
    const responseJson = await response.json();
    return responseJson;
}