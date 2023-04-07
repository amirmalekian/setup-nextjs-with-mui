import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { createTheme } from "../theme";
import createEmotionCache from "../utils/createEmotionCache";
import Layout from "../layouts";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

type PageComponent<P = {}> = React.FC<P> & {
  getLayout?: (page: React.ReactNode) => React.ReactNode;
};

export interface MyAppProps extends AppProps {
  Component: PageComponent;
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const theme = createTheme();

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>setup-nextjs-with-mui</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <meta name="description" content="setup-nextjs-with-mui" />
        <meta name="keywords" content="setup-nextjs-with-mui" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {Component.getLayout ? (
          Component.getLayout(<Component {...pageProps} />)
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </ThemeProvider>
    </CacheProvider>
  );
}
