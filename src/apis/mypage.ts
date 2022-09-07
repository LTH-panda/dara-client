import client from "./@client";

export type UserVideo = {
  userIdx: number;
  nickname: string;
  profile: string;
  email: string;
  point: number;
  reqList: Array<any>;
};

export const getVideoListRequestByUserId = async (userIdx: number) => {
  const res = await client.get<{ result: UserVideo }>("/mypages/request", {
    params: { userIdx },
  });
  return res.data.result.reqList;
};

export const getVideoListProduceByUserId = async (userIdx: number) => {
  const res = await client.get<{ result: UserVideo }>("/mypages/produce", {
    params: { userIdx },
  });
  return res.data.result.reqList;
};

export type UserProfile = {
  userIdx: number;
  nickname: string;
  name: string;
  email: string;
  profileImg: string;
  point: number;
  report: number;
};

export const getUserProfileByUserId = async (userIdx: number) => {
  const res = await client.get<{ result: UserProfile }>("/users/profile", {
    params: { userIdx },
  });
  return res.data.result;
};
