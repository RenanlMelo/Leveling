export const About = () => {
  return (
    <>
      <section
        id="sobre"
        className="w-full flex flex-col justify-center items-center py-24"
      >
        <h2 className="text-[#eee] text-[2.25vw] font-bold tracking-wide mb-24">
          Sobre
        </h2>
        <div className="grid grid-cols-2 justify-center items-center px-[10vw] gap-x-32">
          <div className="flex flex-col justify-start items-start h-full">
            <h3 className="text-[#ddd] text-[2vw] font-semibold whitespace-nowrap p-6">
              Quem somos
            </h3>
            <p className="text-[calc(.6vw+8px)] leading-9 text-[#ccc]">
              Na Leveling, transformamos ideias em soluções tecnológicas
              inovadoras. Nosso objetivo é oferecer uma experiência única e
              resultados que superam expectativas. Com uma equipe
              multidisciplinar e comprometida com o sucesso, nos inserimos no
              dia a dia dos nossos clientes para compreender suas dores,
              necessidades e desejos, entregando projetos personalizados e sob
              medida.{" "}
            </p>
          </div>
          <div className="flex flex-col justify-start items-start h-full">
            <h3 className="text-[#ddd] text-[2vw] font-semibold whitespace-nowrap p-6">
              O que fazemos
            </h3>
            <p className="text-[calc(.6vw+8px)] leading-9 text-[#ccc]">
              Focados principalmente no desenvolvimento de sites, atendemos às
              necessidades específicas dos nossos clientes, proporcionando a
              inserção no mundo digital e impulsionando seu crescimento e
              sucesso. Seja para criar um site do zero ou melhorar uma
              plataforma existente, estamos comprometidos em auxiliar na jornada
              de transformação da sua ideia.{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
