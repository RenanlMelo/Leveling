import { useEffect, useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { Link } from "react-scroll";
import "./Header.css";

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
    </>
  );
};

