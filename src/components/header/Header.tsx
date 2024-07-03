import { useEffect, useState } from "react";
<<<<<<< HEAD
=======
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { Link } from "react-scroll";
>>>>>>> 7a3c39dc4a25192f261c7de9cd8ac624f0979ea9
import "./Header.css";
import { motion, AnimatePresence, useAnimation } from "framer-motion";


type headerProps = {
  sectionSize: number | null;
};

export const Header: React.FC<headerProps> = ({ sectionSize }) => {
  const controls = useAnimation();

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    controls.start({
      backgroundColor: scrollY > 50 ? "#000000" : "transparent",
      transition: { duration: 0.5 },
    });
  }, [scrollY, controls]);

<<<<<<< HEAD
const Header: React.FC = () => {

  const controls = useAnimation();

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    controls.start({
      backgroundColor: scrollY > 50 ? "#070707" : "transparent",
      transition: { duration: .5 }
    });
  }, [scrollY, controls]);



=======
>>>>>>> 7a3c39dc4a25192f261c7de9cd8ac624f0979ea9
  const [activeItem, setActiveItem] = useState("home");
  const menuItems = [
    { name: "Início", id: "inicio" },
    { name: "Serviços", id: "servicos" },
    { name: "Cases", id: "cases" },
    { name: "Sobre", id: "sobre" },
  ];

  return (
    <>
      <AnimatePresence>
<<<<<<< HEAD

        <motion.header className="fixed grid grid-cols-2 justify-center items-center px-10 w-full z-40 bg-[#080808]"
          initial={{ backgroundColor: "transparent" }}
          animate={controls}>
          <motion.img src="/logo.png" alt="Logo" className="w-[10vw]" />
          <motion.nav className="w-full flex justify-end items-center" role="navigation" aria-label="Menu Principal">
            <motion.ul className="text-[1.05vw] text-[#eee] flex gap-x-[1vw]">
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  className={`menu-item ${activeItem === item.id ? "active" : ""}`}
                  onClick={() => setActiveItem(item.id)}
                >
                  {item.name === "Serviços" ? (
                    <>
                      {item.name}
                      <motion.svg
                        width="20"
                        height="8"
                        viewBox="0 0 24 10"
                        className="svg_logo translate-y-1/2"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L9.91628 6.14782"
                          stroke="#4c00ff"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M10 6.14783L18.9163 1.00001"
                          stroke="#4c00ff"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </motion.svg>
                    </>
                  ) : (
                    item.name
                  )}
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>
        </motion.header>
      </AnimatePresence >
=======
        <motion.header
          className="fixed grid grid-cols-2 justify-center items-center max-w-[100vw] px-10 w-full z-40 bg-[#080808]"
          initial={{ backgroundColor: "transparent" }}
          animate={controls}
        >
          <img src="/logo.png" alt="Logo" className="w-[10vw]" />
          <nav className="w-full flex justify-end items-center">
            <ul className="text-[1.05vw] text-[#eee] flex gap-x-[1vw]">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={`menu-item ${
                    activeItem === item.id ? "active" : ""
                  }`}
                  onClick={() => setActiveItem(item.id)}
                >
                  <Link
                    activeClass="active"
                    smooth
                    spy
                    duration={800}
                    offset={
                      item.name === "Serviços" && sectionSize !== null
                        ? sectionSize * (-1 / 3)
                        : 0
                    }
                    to={`${item.id}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.header>
      </AnimatePresence>
>>>>>>> 7a3c39dc4a25192f261c7de9cd8ac624f0979ea9
    </>
  );
};

