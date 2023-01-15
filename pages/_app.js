
import "../styles/globals.css";
import CozaProvider from "../Components/Context/CozaProvider";

export default function MyApp({ Component, pageProps }) {
  return (
    <CozaProvider>
      <Component {...pageProps} />
    </CozaProvider>
  );
}
