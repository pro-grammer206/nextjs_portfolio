import Link from "next/link";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../context/Theme";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

function Nav({ isOn, toggleSwitch }) {
  const { stheme, toggle } = useContext(ThemeContext);
  const handleClick = () => {
    toggle();
    toggleSwitch();
  };

  return (
    <motion.nav
      animate={{ y: 0 }}
      initial={{ y: "-100vw" }}
      transition={{ type: "spring", duration: 2 }}
      style={stheme}
    >
      <h3>My Page</h3>
      <section>
        <div
          className="switch"
          data-ison={stheme.color === "white"}
          onClick={handleClick}
        >
          <motion.div className="handle" layout transition={spring} />
        </div>
        <Link href="/" passHref>
          <motion.a whileHover={{ scale: 1.2 }}>Home</motion.a>
        </Link>
        <Link href="/about" passHref>
          <motion.a whileHover={{ scale: 1.2 }}>About</motion.a>
        </Link>
        <Link href="/projects" passHref>
          <motion.a whileHover={{ scale: 1.2 }}>Projects</motion.a>
        </Link>
      </section>
      <style jsx>
        {`
          s a {
            color: ${stheme.color};
          }
        `}
      </style>
    </motion.nav>
  );
}

export default Nav;
