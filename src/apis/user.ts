import client from "./@client";

type LoginParams = {
  nickname: string;
  name: string;
  email: string;
  profileImg: string;
};
type LoginResult = {
  userIdx: number;
  jwtToken: string;
};

export const login = async (params: LoginParams) => {
  const res = await client.post<{ result: LoginResult }>(
    "/users/login",
    params
  );

  return res.data.result;
};
