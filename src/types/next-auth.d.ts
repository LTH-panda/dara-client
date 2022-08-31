/* eslint-disable no-unused-vars */
import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      jwtToken: string;
    } & DefaultSession["user"];
  }
}
