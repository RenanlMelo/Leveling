import { useEffect, useState } from "react";
import "./Header.css";
import { motion, AnimatePresence, useScroll, useAnimation } from "framer-motion";



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



  const [activeItem, setActiveItem] = useState("home");
  const menuItems = [
    { name: "Início", id: "inicio" },
    { name: "Serviços", id: "servicos" },
    { name: "Sobre", id: "sobre" },
    { name: "Portfólio", id: "portfolio" },
    { name: "Equipe", id: "equipe" },
  ];

  return (
    <>
      <AnimatePresence>

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
    </>
  );
};

export default Header;

{
  /* <ul className="text-xl text-[#eee] flex gap-x-8">
  <li>Início</li>
  <li className="flex justify-center items-center gap-x-2">
    Serviços{" "}
    <svg
      width="20"
      height="8"
      viewBox="0 0 20 8"
      fill="none"
      className="svg_logo translate-y-1/2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L9.91628 6.14782"
        stroke=""
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M10 6.14783L18.9163 1.00001"
        stroke=""
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  </li>
  <li>Sobre</li>
  <li>Portifólio</li>
  <li>Equipe</li>
</ul> */
}
