import { store } from "@/store";
import NavigationBar from "@/components/common/NavigationBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NavigationBar />

      <Component {...pageProps} />
    </Provider>
  );
}
