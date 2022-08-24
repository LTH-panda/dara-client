/* eslint-disable no-unused-vars */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GOOGLE_CLIENT_ID: string;
      GOOGLE_CLIENT_SECRET: string;
      KAKAO_CLIENT_ID: string;
      KAKAO_CLIENT_SECRET: string;
      SECRET: string;
    }
  }
}

export {};
