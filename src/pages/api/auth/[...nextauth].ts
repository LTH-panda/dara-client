import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID,
      clientSecret: process.env.KAKAO_CLIENT_SECRET,
    }),
  ],
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth",
    error: "/auth/error",
  },

  callbacks: {
    async signIn({ user }) {
      if (user) {
        try {
          // logic
        } catch (e) {
          return false;
        }
      }
      return false;
    },
    jwt({ token, user }) {
      return token;
    },
    session({ session, token }) {
      return session;
    },
    redirect({ baseUrl }) {
      return baseUrl;
    },
  },
});
