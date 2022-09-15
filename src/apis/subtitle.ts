import client from "./@client";

export interface CreateSubtitleParams {
  userIdx: number;
  videoIdx: number;
  letterCnt: number;
  timeLine: string;
  content: string;
}

export const createSubtitle = async (params: CreateSubtitleParams) => {
  const res = await client.post("/subtitle/insert", params);
  return res.data;
};

export const getSubtitle = async (videoIdx: number) => {
  const res = await client.get<{ result: GetSubtitleResult[] }>(
    "/subtitle/get",
    {
      params: { videoIdx },
    }
  );
  return res.data.result;
};

export interface GetSubtitleResult {
  videoIdx: number;
  timeLine: string;
  content: string;
}

export interface RegisterSubtitleParams {
  userIdx: number;
  videoIdx: number;
}

export const registerSubtitle = async (params: RegisterSubtitleParams) => {
  const res = await client.post("/subtitle/register", params);
  return res.data;
};

export interface UpdateSubtitleParams {
  userIdx: number;
  videoIdx: number;
  subtitleIdx: number;
  content: string;
}

export const updateSubtitle = async (params: UpdateSubtitleParams) => {
  const res = await client.patch("/subtitle/update", params);

  return res.data;
};

export interface ConfirmSubtitleParams {
  userIdx: number;
  videoIdx: number;
}

export const confirmSubtitle = async (params: ConfirmSubtitleParams) => {
  const res = await client.patch("/subtitle/confirm", params);
  return res.data;
};

export const deleteSubtitle = async (id: number) => {
  const res = await client.delete(`/subtitle/delete/${id}`);
  return res.data;
};

export const resetSubtitle = async () => {
  const res = await client.delete("/subtitle/deleteAll");

  return res.data;
};

export const pauseSubtitle = async () => {
  const res = await client.patch("/subtitle/giveUp");

  return res.data;
};
