import Router from "next/router";
import Head from "next/head";
import nProgress from "nprogress";
import { ChakraProvider } from "@chakra-ui/react";

import Layout from "../components/Layout";
import nprogress from "nprogress";

function MyApp({ Component, pageProps }) {
  nProgress.configure({ showSpinner: false });

  Router.events.on("routeChangeStart", () => {
    nprogress.start();
  });
  return (
    <>
      <Head />
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
