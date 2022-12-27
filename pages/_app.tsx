import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";

const lightTheme = createTheme({
  type: "light",
  theme: {},
});

const darkTheme = createTheme({
  type: "dark",
  theme: {},
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const showFrags = router.pathname !== "/" ? false : true;
  return (
    <div>
      <NextThemesProvider
        defaultTheme="dark"
        attribute="class"
        value={{ light: lightTheme.className, dark: darkTheme.className }}
      >
        <NextUIProvider>
          <NavBar />
          <Component {...pageProps} />
          {showFrags && <Footer />}
        </NextUIProvider>
      </NextThemesProvider>
    </div>
  );
}

export default MyApp;
