import { conversionVideo } from "./convertedToFavoriteVideo";
import { Video } from "../ts/video";
import { expect, it, describe } from "vitest";

describe("conversionVideo", () => {
    it("apiのvideoからお気に入り用のvideoオブジェクトに変換", async () => {
        const video: Video = {
            id: {
                videoId: "123456789",
            },
            snippet: {
                title: "Test Video",
                thumbnails: {
                    high: {
                        url: "https://example.com/thumbnail.jpg",
                    },
                },
                channelId: "channel123",
                channelTitle: "Test Channel",
                publishedAt: "2022-01-01T00:00:00Z",
            },
        };

        const convertedVideo = await conversionVideo(video);

        expect(convertedVideo).toEqual({
            videoId: "123456789",
            title: "Test Video",
            thumbnail: "https://example.com/thumbnail.jpg",
            channelId: "channel123",
            channelTitle: "Test Channel",
            publishedAt: "2022-01-01T00:00:00Z",
        });
    });
});
