import "bootstrap/dist/css/bootstrap.css";
import Layout from "../container/Layout";
import Head from "next/head";
import "../styles/global.css";
import { Provider } from "react-redux";
import store from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Soft Ui Dashboard</title>
        <meta name="description" content="Soft-UI Dashboard" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
