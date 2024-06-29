import { motion } from "framer-motion";
import "./services.css";

// Serviços
const servicesData = [
  // 1º Serviço
  {
    title: "Página Estática",
    description:
      "Gere leads e capture a atenção do seu público com uma Landing Page otimizada. Projetamos páginas de destino atraentes e eficazes, perfeitas para promover produtos, serviços ou campanhas.",
    linkHref: "",
    roundedClasses: "rounded-br-3xl rounded-tl-3xl"
  },
  // 2º Serviço
  {
    title: "Loja Virtual",
    description:
      "Leve seu negócio para o próximo nível com uma loja virtual robusta. Desenvolvemos e-commerces atraentes e eficientes, focados em conversão e integração segura de sistemas de pagamento.",
    linkHref: "",
    roundedClasses: "rounded-bl-3xl rounded-tr-3xl"
  },
  // 3º Serviço
  {
    title: "Blog",
    description:
      "Transforme suas ideias em palavras e conecte-se com seu público. Criamos blogs personalizados, otimizados para SEO, garantindo uma plataforma funcional e estética para seus conteúdos.",
    linkHref: "",
    roundedClasses: "rounded-bl-3xl rounded-tr-3xl"
  },
  // 4º Serviço
  {
    title: "Cartão de Visita Digital",
    description:
      "Modernize sua apresentação com um Cartão de Visita Digital. Crio cartões elegantes e interativos que destacam sua marca, facilitando o compartilhamento de informações de forma prática e impactante.",
    linkHref: "",
    roundedClasses: "rounded-br-3xl rounded-tl-3xl"
  },
];

export const Services = () => {
  return (
    <>
      <div className="flex relative w-full">
        <img src="/division.svg" alt="" className="absolute -translate-y-1/3" />
        <motion.section id='servicos' className="h-fit w-full px-[10vw] bg-transparent bg-no-repeat bg-cover py-32 shadow-division z-10">
          <motion.h2 className="text-[#eee] text-center text-[2.5vw] font-bold tracking-wide mb-24">
            Serviços oferecidos
          </motion.h2>

          <div className="grid grid-cols-2 grid-rows-2 gap-y-[4vw] gap-x-[4vw] justify-center items-center w-fit mx-auto">
            {servicesData.map((service, index) => (
              <div className={`flex justify-${index % 2 === 0 ? "end" : "start"} items-center w-full h-full`} key={index}>
                <motion.div className={`bg-transparent w-[68%] h-full p-10 ${service.roundedClasses} hover:backdrop-blur-lg duration-200 border border-[#eeeeee50] relative shadow-servicesCard`}>
                  <h4 className="text-[1.2vw] font-bold font-mono text-[#eee] pl-2 pb-4">
                    {service.title}
                  </h4>
                  <p className="text-[.9vw] font-['Montserrat'] text-[#eee]">
                    {service.description}
                  </p>
                  <span className="absolute bottom-2 right-6">
                    <a
                      href={service.linkHref}
                      className="text-[var(--secondary-color)] underline underline-offset-2"
                    >
                      Saiba mais
                    </a>
                  </span>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </>
  );
};
