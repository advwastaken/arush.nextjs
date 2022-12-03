import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import BackNav from "../components/backNav";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const showFrags = router.pathname !== "/" ? false : true;
  const showBack = router.pathname === "/" ? false : true;
  return (
    <div>
      {showFrags && <Header />}
      {showBack && <BackNav />}
      <Component {...pageProps} />
      {showFrags && <Footer />}
    </div>
  );
}

export default MyApp;
