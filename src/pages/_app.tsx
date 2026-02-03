import "@/styles/globals.css";
import "@/styles/index.css";
import "@/styles/feed.css";
import "@/styles/feedi.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import "@/styles/profile.css";
import "@/styles/modal.css";
import "@/styles/paper.css";
import "@/styles/chatbot.css";
import "@/styles/career.css";
// import "@/styles/home.css";
// import "@/styles/research.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
