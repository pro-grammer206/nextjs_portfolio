import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../context/Theme";
import Card from "../components/Card";

function About() {
  const container = {
    hidden: { y: "-100vh" },
    show: {
      y: 0,

      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { x: "-100vw" },
    show: { x: 0 },
  };
  const { stheme } = useContext(ThemeContext);

  return (
    <motion.div
      className="page"
      variants={container}
      initial="hidden"
      animate="show"
      style={stheme}
    >
      <motion.h3 variants={item}>About</motion.h3>
      <motion.p variants={item}>Web developer</motion.p>
      <motion.a
        href="https://github.com/pro-grammer206"
        rel="noreferrer"
        whileHover={{ scaleX: 1.2, textTransform: "uppercase" }}
      >
        <Card content="Check my github" />
      </motion.a>
    </motion.div>
  );
}

export default About;
