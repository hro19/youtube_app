const KEY:string = "AIzaSyCmbnBOCABsalwCjtkM9iWz3ij9YJrx0Ao";
const BASIC_URL:string = "https://www.googleapis.com/youtube/v3/search";

export const youtubeApi = {
  async searchVideos(query: string){
    const url = `${BASIC_URL}?part=snippet&q=${query}&key=${KEY}&type=video`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      return data.items;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  },
  getVideoDetails(videoId: string) {
    // Function to get details of a video
    // ...
  },
  uploadVideo(videoData: any) {
    // Function to upload a video
    // ...
  },
  deleteVideo(videoId: string) {
    // Function to delete a video
    // ...
  },
};

export default youtubeApi;
