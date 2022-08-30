import client from "./@client";

export type UserVideo = {
  userIdx: number;
  nickname: string;
  profile: string;
  email: string;
  point: number;
  reqList: Array<Object>;
};

export const getVideoListRequestByUserId = async (userIdx: number) => {
  const res = await client.get("/mypages/request", {
    params: { userIdx },
  });
  return res.data;
};

export const getVideoListProduceByUserId = async (userIdx: number) => {
  const res = await client.get("/mypages/produce", {
    params: { userIdx },
  });
  return res.data;
};
