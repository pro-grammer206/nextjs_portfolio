import Head from "next/head";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/Theme";

export default function Home() {
  const [toggle, setToggle] = useState(false);
  const { stheme } = useContext(ThemeContext);
  const arr = ["HTML", "CSS", "Javascript"];

  const container = {
    left: { y: "-100vw" },
    right: {
      y: 0,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  const item = {
    left: { y: "-100vw" },
    right: { y: 0 },
  };
  const cardV = {
    open: {
      scale: 1,
    },
    closed: { scale: 0, display: "none" },
  };
  const bA = {
    open: {
      borderRadius: "50%",
    },
    closed: {
      borderRadius: "1rem",
    },
  };
  return (
    <AnimatePresence>
      <motion.div
        variants={container}
        initial="left"
        animate="right"
        className="home"
        style={{ color: stheme.color }}
      >
        <motion.h2 variants={item} transition={{ type: "tween", duration: 1 }}>
          Welcome to the world of react
        </motion.h2>
        <motion.p variants={item}>
          React combines all the specified technologies into a simple functional
          component
        </motion.p>
        <motion.ul variants={item} transition={{ type: "tween" }}>
          {arr.map((a) => (
            <motion.li key={a}>{a}</motion.li>
          ))}
        </motion.ul>
        <h4>Site uses the given three frameworks</h4>
        <motion.button
          animate={toggle ? "open" : "closed"}
          variants={bA}
          className="btn"
          onClick={() => setToggle(!toggle)}
          style={
            stheme.backgroundColor === "#121212"
              ? { backgroundColor: "#2a2929" }
              : { backgroundColor: stheme.backgroundColor }
          }
        >
          {toggle ? "Hide" : "Show"}
        </motion.button>
        <motion.div
          className="card"
          animate={toggle ? "open" : "closed"}
          variants={cardV}
          exit={{ opacity: 0 }}
          style={
            stheme.backgroundColor === "#121212"
              ? { backgroundColor: "#2a2929" }
              : { backgroundColor: stheme.backgroundColor }
          }
        >
          <h2>React</h2>
          <p>
            React is a frontend library for creating fast snappy single page
            applications.It uses concept of virtual DOM for rendering elements.
          </p>
        </motion.div>
        <motion.div
          className="card"
          animate={toggle ? "open" : "closed"}
          variants={cardV}
          exit={{ opacity: 0 }}
          style={
            stheme.backgroundColor === "#121212"
              ? { backgroundColor: "#2a2929" }
              : { backgroundColor: stheme.backgroundColor }
          }
        >
          <h2>NextJS</h2>
          <p>
            NextJS is awsome and powerful framework for building powerful
            websites by combining both the frontend and backend in the same app.
          </p>
        </motion.div>
        <motion.div
          className="card"
          animate={toggle ? "open" : "closed"}
          variants={cardV}
          exit={{ opacity: 0 }}
          style={
            stheme.backgroundColor === "#121212"
              ? { backgroundColor: "#2a2929" }
              : { backgroundColor: stheme.backgroundColor }
          }
        >
          <h2>Framer motion</h2>
          <p>
            Framer motion is a production grade react animation framwork used
            for create mind boggling animations in websites
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
