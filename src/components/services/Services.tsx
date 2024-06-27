import { motion } from "framer-motion";
import "./services.css";

export const Services = () => {
  return (
    <>
      <motion.section className="h-fit w-full px-[10vw] shadow-sectionBorder bg-[url(/lines.svg)] bg-no-repeat bg-cover py-32">
        <motion.h2 className="gradiente text-center text-[2.5vw] font-bold tracking-wide mb-24">
          Serviços oferecidos
        </motion.h2>

        <div className="grid grid-cols-2 grid-rows-2 gap-y-[4vw] gap-x-[4vw] justify-center items-center w-fit mx-auto">
          <div className="flex justify-end items-center w-full h-full">
            <motion.div className="bg-[var(--services-card)] w-[68%] h-full p-10 rounded-2xl shadow-servicesCard hover:shadow-servicesCardHover hover:bg-[var(--services-cardHover)] hover:backdrop-blur-lg duration-200">
              <h3 className="text-[1.3vw] font-bold font-mono text-[#eee] pl-2 pb-4">
                Página Estática
              </h3>
              <p className="text-[1vw] font-['Montserrat'] text-[#eee]">
                Gere leads e capture a atenção do seu público com uma Landing
                Page otimizada. Projetamos páginas de destino atraentes e
                eficazes, perfeitas para promover produtos, serviços ou
                campanhas.
              </p>
            </motion.div>
          </div>

          <div className="flex justify-start items-center w-full h-full">
            <motion.div className="bg-[var(--services-card)] w-[68%] h-full p-10 rounded-2xl shadow-servicesCard hover:shadow-servicesCardHover hover:bg-[var(--services-cardHover)] hover:backdrop-blur-lg duration-200">
              <h3 className="text-[1.3vw] font-bold font-mono text-[#eee] pl-2 pb-4">
                Loja Virtual
              </h3>
              <p className="text-[1vw] font-['Montserrat'] text-[#eee]">
                Leve seu negócio para o próximo nível com uma loja virtual
                robusta. Desenvolvemos e-commerces atraentes e eficientes,
                focados em conversão e integração segura de sistemas de
                pagamento.
              </p>
            </motion.div>
          </div>

          <div className="flex justify-end items-center w-full h-full">
            <motion.div className="bg-[var(--services-card)] w-[68%] h-full p-10 rounded-2xl shadow-servicesCard hover:shadow-servicesCardHover hover:bg-[var(--services-cardHover)] hover:backdrop-blur-lg duration-200">
              <h3 className="text-[1.3vw] font-bold font-mono text-[#eee] pl-2 pb-4">
                Blog
              </h3>
              <p className="text-[1vw] font-['Montserrat'] text-[#eee]">
                Transforme suas ideias em palavras e conecte-se com seu
                público. Criamos blogs personalizados, otimizados para SEO,
                garantindo uma plataforma funcional e estética para seus
                conteúdos.
              </p>
            </motion.div>
          </div>

          <div className="flex justify-start items-center w-full h-full">
            <motion.div className="bg-[var(--services-card)] w-[68%] *:h-full p-10 rounded-2xl shadow-servicesCard hover:shadow-servicesCardHover hover:bg-[var(--services-cardHover)] hover:backdrop-blur-lg duration-200">
              <h3 className="text-[1.3vw] font-bold text-[#eee] pl-2 pb-4">
                Cartão de Visita Digital
              </h3>
              <p className="text-[1vw] font-['Montserrat'] text-[#eee]">
                Modernize sua apresentação com um Cartão de Visita Digital.
                Crio cartões elegantes e interativos que destacam sua marca,
                facilitando o compartilhamento de informações de forma prática
                e impactante.
              </p>
            </motion.div>
          </div>
        </div>

        {/* <motion.div className="text-2xl text-[#ccc]">E-Commerce</motion.div>
          <motion.div className="text-2xl text-[#ccc]">Blog</motion.div>
          <motion.div className="text-2xl text-[#ccc]">
            Digital Business Card
          </motion.div> */}
      </motion.section>

    </>
  );
};
