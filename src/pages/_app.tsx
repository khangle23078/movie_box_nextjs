import MainLayout from "@/layouts/MainLayout";
import type {AppProps} from "next/app";
import {Poppins} from "next/font/google";
import "@/styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  style: "normal",
  weight: ["300", "400"],
});

export default function App({Component, pageProps}: AppProps) {
  return (
    <MainLayout>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </MainLayout>
  );
}
