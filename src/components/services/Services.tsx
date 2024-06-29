import { motion } from "framer-motion";
import "./services.css";

export const Services = () => {
  return (
    <>
      <div className="flex relative w-full">
        <img src="/division.png" alt="" className="absolute -translate-y-1/3" />
        <motion.section className="h-fit w-full px-[10vw] bg-transparent bg-no-repeat bg-cover py-32 shadow-division z-10">
          <motion.h2 className="text-[#eee] text-center text-[2.5vw] font-bold tracking-wide mb-24">
            Serviços oferecidos
          </motion.h2>

          <div className="grid grid-cols-2 grid-rows-2 gap-y-[4vw] gap-x-[4vw] justify-center items-center w-fit mx-auto">
            <div className="flex justify-end items-center w-full h-full">
              <motion.div className="bg-transparent w-[68%] h-full p-10 rounded-br-3xl rounded-tl-3xl hover:backdrop-blur-lg duration-200 border border-[#eeeeee50] relative shadow-servicesCard">
                <h4 className="text-[1.2vw] font-bold font-mono text-[#eee] pl-2 pb-4">
                  Página Estática
                </h4>
                <p className="text-[.9vw] font-['Montserrat'] text-[#eee]">
                  Gere leads e capture a atenção do seu público com uma Landing
                  Page otimizada. Projetamos páginas de destino atraentes e
                  eficazes, perfeitas para promover produtos, serviços ou
                  campanhas.
                </p>
                <span className="absolute bottom-2 right-6">
                  <a
                    href=""
                    className="text-[var(--secondary-color)] underline underline-offset-2"
                  >
                    Saiba mais
                  </a>
                </span>
              </motion.div>
            </div>
            <div className="flex justify-start items-center w-full h-full">
              <motion.div className="bg-transparent w-[68%] h-full p-10 rounded-bl-3xl rounded-tr-3xl hover:backdrop-blur-lg duration-200 border border-[#eeeeee50] relative shadow-servicesCard">
                <h4 className="text-[1.2vw] font-bold font-mono text-[#eee] pl-2 pb-4">
                  Loja Virtual
                </h4>
                <p className="text-[.9vw] font-['Montserrat'] text-[#eee]">
                  Leve seu negócio para o próximo nível com uma loja virtual
                  robusta. Desenvolvemos e-commerces atraentes e eficientes,
                  focados em conversão e integração segura de sistemas de
                  pagamento.
                </p>
                <span className="absolute bottom-2 right-6">
                  <a
                    href=""
                    className="text-[var(--secondary-color)] underline underline-offset-2"
                  >
                    Saiba mais
                  </a>
                </span>
              </motion.div>
            </div>
            <div className="flex justify-end items-center w-full h-full">
              <motion.div className="bg-transparent w-[68%] h-full p-10 rounded-bl-3xl rounded-tr-3xl hover:backdrop-blur-lg duration-200 border border-[#eeeeee50] relative shadow-servicesCard">
                <h4 className="text-[1.2vw] font-bold font-mono text-[#eee] pl-2 pb-4">
                  Blog
                </h4>
                <p className="text-[.9vw] font-['Montserrat'] text-[#eee]">
                  Transforme suas ideias em palavras e conecte-se com seu
                  público. Criamos blogs personalizados, otimizados para SEO,
                  garantindo uma plataforma funcional e estética para seus
                  conteúdos.
                </p>
                <span className="absolute bottom-2 right-6">
                  <a
                    href=""
                    className="text-[var(--secondary-color)] underline underline-offset-2"
                  >
                    Saiba mais
                  </a>
                </span>
              </motion.div>
            </div>
            <div className="flex justify-start items-center w-full h-full">
              <motion.div className="bg-transparent w-[68%] h-full p-10 rounded-br-3xl rounded-tl-3xl hover:backdrop-blur-lg duration-200 border border-[#eeeeee50] relative shadow-servicesCard">
                <h4 className="text-[1.2vw] font-bold font-mono text-[#eee] pl-2 pb-4">
                  Cartão de Visita Digital
                </h4>
                <p className="text-[.9vw] font-['Montserrat'] text-[#eee]">
                  Modernize sua apresentação com um Cartão de Visita Digital.
                  Crio cartões elegantes e interativos que destacam sua marca,
                  facilitando o compartilhamento de informações de forma prática
                  e impactante.
                </p>
                <span className="absolute bottom-2 right-6">
                  <a
                    href=""
                    className="text-[var(--secondary-color)] underline underline-offset-2"
                  >
                    Saiba mais
                  </a>
                </span>
              </motion.div>
            </div>

            {/* <div className="flex justify-start items-center w-full h-full">
              <motion.div className="bg-[var(--services-card)] w-[68%] h-full p-10 rounded-2xl shadow-servicesCard hover:shadow-servicesCardHover hover:bg-[var(--services-cardHover)] hover:backdrop-blur-lg duration-200">
                <h4 className="text-[1.2vw] font-bold font-mono text-[#eee] pl-2 pb-4">
                  Loja Virtual
                </h4>
                <p className="text-[.9vw] font-['Montserrat'] text-[#eee]">
                  Leve seu negócio para o próximo nível com uma loja virtual
                  robusta. Desenvolvemos e-commerces atraentes e eficientes,
                  focados em conversão e integração segura de sistemas de
                  pagamento.
                </p>
              </motion.div>
            </div>

            <div className="flex justify-end items-center w-full h-full">
              <motion.div className="bg-[var(--services-card)] w-[68%] h-full p-10 rounded-2xl shadow-servicesCard hover:shadow-servicesCardHover hover:bg-[var(--services-cardHover)] hover:backdrop-blur-lg duration-200">
                <h4 className="text-[1.2vw] font-bold font-mono text-[#eee] pl-2 pb-4">
                  Blog
                </h4>
                <p className="text-[.9vw] font-['Montserrat'] text-[#eee]">
                  Transforme suas ideias em palavras e conecte-se com seu
                  público. Criamos blogs personalizados, otimizados para SEO,
                  garantindo uma plataforma funcional e estética para seus
                  conteúdos.
                </p>
              </motion.div>
            </div>

            <div className="flex justify-start items-center w-full h-full">
              <motion.div className="bg-[var(--services-card)] w-[68%] *:h-full p-10 rounded-2xl shadow-servicesCard hover:shadow-servicesCardHover hover:bg-[var(--services-cardHover)] hover:backdrop-blur-lg duration-200">
                <h4 className="text-[1.2vw] font-bold text-[#eee] pl-2 pb-4">
                  Cartão de Visita Digital
                </h4>
                <p className="text-[.9vw] font-['Montserrat'] text-[#eee]">
                  Modernize sua apresentação com um Cartão de Visita Digital.
                  Crio cartões elegantes e interativos que destacam sua marca,
                  facilitando o compartilhamento de informações de forma prática
                  e impactante.
                </p>
              </motion.div>
            </div> */}
          </div>

          {/* <motion.div className="text-2xl text-[#ccc]">E-Commerce</motion.div>
          <motion.div className="text-2xl text-[#ccc]">Blog</motion.div>
          <motion.div className="text-2xl text-[#ccc]">
            Digital Business Card
          </motion.div> */}
        </motion.section>

        {/* <section className="-z-10 absolute h-screen w-full bg-[#202020] px-48 mt-32">
          <h2 className="text-4xl font-bold tracking-wide text-[#eee]">
            Serviços oferecidos
          </h2>
          <div className="text-2xl text-[#aaaaaa90]">
            Landing Page
          </div>
          <div className="text-2xl text-[#aaaaaa90]">
            E-Commerce
          </div>
          <div className="text-2xl text-[#aaaaaa90]">Blog</div>
          <div className="text-2xl text-[#aaaaaa90]">
            Digital Business Card
          </div>
        </section> */}
      </div>
    </>
  );
};
