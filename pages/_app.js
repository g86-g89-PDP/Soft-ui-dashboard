import "bootstrap/dist/css/bootstrap.css";
import Layout from "../container/Layout";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Soft Ui Dashboard</title>
        <meta name="description" content="Soft-UI Dashboard" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
