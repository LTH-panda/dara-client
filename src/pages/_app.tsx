import GlobalStyle from "commons/styles/global";
import Layout from "components/templates/Layout";
import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>title</title>
      </Head>
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
