import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen top-30 md:top-50 flex  justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center  z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 dark:bg-gradient-to-r dark:from-blue-500 dark:to-cyan-400 bg-gradient-to-r from-[#6953ff] to-[#3a1ef0] bg-clip-text text-transparent leading-right">
            Hi,I'm Anurag Saraswat
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            A full-stack developer dedicated to building end-to-end web solutions. I strive to combine technical excellence with smooth, enjoyable user experiences.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
