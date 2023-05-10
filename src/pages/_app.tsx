import "../../styles/globals.sass";
import RootLayout from "../../components/layout";

export default function App({ Component, pageProps }: any) {
  return (
      <Component {...pageProps} />
  );
}
