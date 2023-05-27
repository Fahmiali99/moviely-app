import { store } from "@/store";
import NavigationBar from "@/components/NavigationBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import FooterBar from "@/components/FooterBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NavigationBar />
      <Component {...pageProps} />
      <FooterBar />
    </Provider>
  );
}
