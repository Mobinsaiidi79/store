import "@/styles/globals.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration:1000,
      once:true
    })
  })
  return <Component {...pageProps} />;
}
