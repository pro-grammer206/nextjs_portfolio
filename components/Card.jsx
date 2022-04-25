import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../context/Theme";

function Card({ id, title, content, handleClick, live, code }) {
  const { stheme } = useContext(ThemeContext);
  return (
    <motion.div
      whileInView={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.1 }}
      className="card"
      style={stheme}
      key={id}
      onClick={handleClick}
    >
      <h3>{title}</h3>
      <p>{content}</p>
      {live && (
        <motion.div
          whileHover={{
            scale: 1.2,
            borderRadius: "20%",
            textTransform: "uppercase",
          }}
          style={{ boxShadow: "1px 2px 2px 1px black", padding: "0.5rem" }}
        >
          <a href={live} target="_blank" rel="noreferrer">
            Check out live
          </a>
        </motion.div>
      )}
      {code && (
        <motion.div
          whileHover={{
            scale: 1.2,
            border: "2px solid black",
            textTransform: "uppercase",
            padding: "0.5rem",
          }}
        >
          <a href={code} target="_blank" rel="noreferrer">
            code on github
          </a>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Card;
