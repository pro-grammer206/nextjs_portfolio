import React from "react";
import { myprojects } from "../data/data";
import Card from "../components/Card";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/Theme";

function Projects() {
  const container = useRef();
  const { stheme } = useContext(ThemeContext);
  useEffect(() => {
    container.current.scrollBy();
  });

  const handleClick = (e) => {
    console.log(e.currentTarget);

    e.currentTarget.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      bloc: "center",
    });
  };

  return (
    <div>
      <h3 style={{ textAlign: "center", color: stheme.color }}>Projects</h3>
      <motion.div className="wall" ref={container}>
        {myprojects.map(({ id, title, content, live, code }) => (
          <Card
            id={id}
            title={title}
            content={content}
            key={id}
            handleClick={handleClick}
            live={live}
            code={code}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
