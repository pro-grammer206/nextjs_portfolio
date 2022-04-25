import "../styles/globals.css";
import Nav from "../components/Nav";
import { useState, useEffect } from "react";
import { ThemeProvider } from "../context/Theme";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    isOn
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "#121212");
  }, [isOn]);

  const toggleSwitch = () => setIsOn(!isOn);
  return (
    <ThemeProvider>
      <Head>
        <title>Portfolio {isOn ? "Light Mode" : "Dark Mode"}</title>
      </Head>
      <Nav isOn={isOn} toggleSwitch={toggleSwitch} />

      <Component {...pageProps} />
      <footer style={isOn ? { color: "black" } : { color: "white" }}>
        <p>Made by vipin {new Date().getFullYear()}</p>
      </footer>
    </ThemeProvider>
  );
}

export default MyApp;
