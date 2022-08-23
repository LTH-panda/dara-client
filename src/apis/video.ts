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

export const getVideoListComplete = async () => {
  const res = await client.get<Video[]>("/videos/completion");
  return res.data;
};

export const getVideoListRequestByCategory = async (categoryId: number) => {
  const res = await client.get<Video[]>("/videos/request/category", {
    params: { categoryId },
  });
  return res.data;
};

export const getVideoListCompleteByCategory = async (categoryId: number) => {
  const res = await client.get<Video[]>("/videos/completion/category", {
    params: { categoryId },
  });
  return res.data;
};

export const getVideoListPopular = async () => {
  const res = await client.get<Video[]>("/videos/main/popular");
  return res.data;
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
  const res = await client.get<VideoDetail>("/videos/video", {
    params: { videoIdx },
  });
  return res.data;
};

export const searchByTitle = async (title: string) => {
  const res = await client.get<Video[]>("/videos/search", {
    params: { title },
  });
  return res.data;
};
