import { http, delay, HttpResponse } from "msw";
import { ImageResponse } from "@/lib/types";

const mockImagesResponse: Record<string, ImageResponse> = {
  "photo_8": {
    title: "Item 8",
    description: "Not available",
    image: "",
    index: 8
  },
  "photo_3": {
    title: "Item 3",
    description: "Description 3",
    image: "https://www.google.com",
    index: 3
  },
  "photo_30": {
    title: "Item 30",
    description: "Description 30",
    image: "https://picsum.photos/id/2/200/300",
    index: 30
  }
};

export const handlers = [
  http.get("/api/images", async () => {
    return HttpResponse.json(mockImagesResponse)  })
];
