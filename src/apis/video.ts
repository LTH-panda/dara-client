import client from "./@client";

export type RequestVideoProps = {
  requester: number;
  categoryIdx: number;
  link: string;
  title: string;
};

export const requestVideo = async ({
  requester,
  categoryIdx,
  link,
  title,
}: RequestVideoProps) => {
  const res = await client.post("/videos/register", {
    requester,
    categoryIdx,
    link,
    title,
  });
  return res.data;
};

export type Video = {
  videoIdx: number;
  link: string;
  title: string;
  admin: string;
};

export const getVideoListRequest = async () => {
  const res = await client.get<{ result: Video[] }>("/videos/request");
  return res.data.result;
};

export const getVideoListComplete = async () => {
  const res = await client.get<{ result: Video[] }>("/videos/completion");
  return res.data.result;
};

export const getVideoListRequestByCategory = async (categoryIdx: number) => {
  const res = await client.get<{ result: Video[] }>(
    "/videos/request/category",
    {
      params: { categoryIdx },
    }
  );
  return res.data.result;
};

export const getVideoListCompleteByCategory = async (categoryIdx: number) => {
  const res = await client.get<{ result: Video[] }>(
    "/videos/completion/category",
    {
      params: { categoryIdx },
    }
  );
  return res.data.result;
};

export const getVideoListPopular = async () => {
  const res = await client.get<{ result: Video[] }>("/videos/main/popular");
  return res.data.result;
};

export type Subtitle = {
  subtitleIdx: number;
  timeline: string;
  content: string;
};

export type VideoDetail = {
  videoIdx: number;
  link: string;
  title: string;
  nickname: string;
  profile: null; // 추후 수정
  like: number;
  dislike: number;
  checkVideoLike: boolean;
  checkVideoDislike: boolean;
  subtitleList: Subtitle[];
};

export const getVideoById = async (videoIdx: number) => {
  const res = await client.get<{ result: VideoDetail }>("/videos/video", {
    params: { videoIdx },
  });
  return res.data.result;
};

export const getVideoCommission = async (videoIdx: number) => {
  const res = await client.get<{ result: VideoCommission }>("/videos/videos", {
    params: { videoIdx },
  });
  return res.data.result;
};

export const searchByTitle = async (title: string) => {
  const res = await client.get<{ result: Video[] }>("/videos/search", {
    params: { title },
  });
  return res.data.result;
};

export interface VideoCommission {
  videoIdx: number;
  link: string;
  title: string;
  checkRequester: boolean;
}
