// /* eslint-disable no-param-reassign */
// import { login } from "apis/user";
// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import KakaoProvider from "next-auth/providers/kakao";

// export default NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     KakaoProvider({
//       clientId: process.env.KAKAO_CLIENT_ID,
//       clientSecret: process.env.KAKAO_CLIENT_SECRET,
//     }),
//   ],
//   secret: process.env.SECRET,
//   session: {
//     strategy: "jwt",
//   },
//   pages: {
//     signIn: "/auth",
//     error: "/auth/error",
//   },
//   events: {
//     signOut({ session, token }) {
//       if (session) session.user.jwtToken = null!;
//       if (token) token.jwtToken = null;
//     },
//   },

//   callbacks: {
//     async signIn({ user }) {
//       if (user) {
//         try {
//           const result = await login({
//             name: user.name ?? "empty",
//             email: user.email ?? "empty",
//             nickname: user.name ?? "empty",
//             profileImg: user.image ?? "empty",
//           });
//           user.jwtToken = result.jwtToken;
//           user.userIdx = result.userIdx;
//           return true;
//         } catch (e) {
//           return false;
//         }
//       }
//       return false;
//     },
//     jwt({ token, user }) {
//       if (user) {
//         token.jwtToken = user.jwtToken;
//         token.userIdx = user.useridx;
//       }
//       return token;
//     },
//     session({ session, token }) {
//       if (token) {
//         session.user.jwtToken = token.jwtToken as string;
//         session.user.userIdx = token.userIdx as number;
//       }
//       return session;
//     },
//     redirect({ baseUrl }) {
//       return baseUrl;
//     },
//   },
// });
