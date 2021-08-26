import "bootstrap/dist/css/bootstrap.css";
import Layout from "../container/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
