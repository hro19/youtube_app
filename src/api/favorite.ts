export const favoriteAll = async (username: string): Promise<any> => {
    console.log(username);
    const response = await fetch(
      `https://kvfirst.firstfirst.workers.dev/api/videos/${username}`
    );
    const responseJson = await response.json();
    // console.log(responseJson);
    return responseJson;
}