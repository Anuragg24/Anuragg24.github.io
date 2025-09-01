import { RevealOnScroll } from "../RevealOnScroll";
import { SkillCard } from "../Skillcard";
import asset from "../../assets/assets.js";
import './About.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard } from "swiper/modules";
import "swiper/css";

export const About = () => {
  const programmingSkills = [
    { name: "C++", icon: asset.cpp },
    { name: "Java", icon: asset.java },
    { name: "Python", icon: asset.python },
  ];
  const webSkills = [
    { name: "HTML", icon: asset.html },
    { name: "JavaScript", icon: asset.js },
    { name: "React Native", icon: asset.reactnative },
    { name: "Bootstrap 5", icon: asset.bootstrap },
    { name: "TailwindCSS", icon: asset.tailwind },
  ];

  const frameworkSkills = [
    { name: "MERN", icon: asset.mern },
    { name: "Spring Boot", icon: asset.springboot },
    { name: "MySQL", icon: asset.mysql },
    { name: "Postgresql", icon: asset.postgresql },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 dark:bg-gradient-to-r dark:from-blue-500 dark:to-cyan-400 bg-gradient-to-r from-[#6953ff] to-[#3a1ef0] bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div
            className="border-blue-500/50 hover:border-blue-500/90
                      glass p-8 rounded-xl border dark:border-white/10  
              hover:-translate-y-1 
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all"
          >
            <p className="text-gray-500 dark:text-gray-300 mb-6">
              I am Anurag Saraswat, a Fullstack Developer and aspiring Software
              Development Engineer with expertise in the MERN stack and Spring
              Boot for building end-to-end web applications. Skilled in C++ and
              Java,and with sufficient knowledge of python, I have a strong
              foundation in algorithms, data structures, and object-oriented
              programming, enabling me to design scalable, secure systems and
              solve complex problems efficiently.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 md:col-span-1">
                <h3 className="text-xl font-bold min-h-[3.5rem] mb-4">
                  Programming Languages
                </h3>
                <Swiper
  modules={[Autoplay, Keyboard]}
  spaceBetween={10}
  slidesPerView={2}
  loop={true}
  autoplay={{
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
   breakpoints={{
    220: { // small screens
      slidesPerView: 2,
      spaceBetween: 5,
    },
    486: { // tablets
      slidesPerView: 3,
      spaceBetween: 5,
    },
    768: { // tablets
      slidesPerView: 1,
      spaceBetween: 5,
    },
    970: { // tablets
      slidesPerView: 2,
      spaceBetween: 5,
    },
    1024: { // desktops
      slidesPerView: 2,
      spaceBetween: 20,
    },
  }}
  speed={5000} // controls slideshow speed
  keyboard={{ enabled: true }}
>
  {programmingSkills.map((skill, idx) => (
    <SwiperSlide key={idx}>
      <SkillCard name={skill.name} icon={skill.icon} />
    </SwiperSlide>
  ))}
</Swiper>
              </div>
              <div className="rounded-xl  p-6 md:col-span-1">
                <h3 className="text-xl min-h-[3.5rem] font-bold mb-4">
                  Web Technologies
                </h3>
                <Swiper
  modules={[Autoplay, Keyboard]}
  spaceBetween={10}
  slidesPerView={2}
  loop={true}
  autoplay={{
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
   breakpoints={{
    220: { // small screens
      slidesPerView: 2,
      spaceBetween: 5,
    },
    486: { // tablets
      slidesPerView: 3,
      spaceBetween: 5,
    },
    768: { // tablets
      slidesPerView: 1,
      spaceBetween: 5,
    },
    970: { // tablets
      slidesPerView: 2,
      spaceBetween: 5,
    },
    1024: { // desktops
      slidesPerView: 2,
      spaceBetween: 20,
    },
  }}
  speed={5000} // controls slideshow speed
  keyboard={{ enabled: true }}
>
  {webSkills.map((skill, idx) => (
    <SwiperSlide key={idx}>
      <SkillCard name={skill.name} icon={skill.icon} />
    </SwiperSlide>
  ))}
</Swiper>
              </div>
              <div className="rounded-xl p-6 md:col-span-2">
                <h3 className="text-xl font-bold mb-4">
                  Frameworks And Databases
                </h3>
               <Swiper
  modules={[Autoplay, Keyboard]}
  spaceBetween={10}
  slidesPerView={2}
  loop={true}
  autoplay={{
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
   breakpoints={{
     220: { // small screens
      slidesPerView: 2,
      spaceBetween: 5,
    },
    486: { // tablets
      slidesPerView: 3,
      spaceBetween: 5,
    },
    643: { // tablets
      slidesPerView: 4,
      spaceBetween: 5,
    },
    768: { // tablets
      slidesPerView: 2,
      spaceBetween: 5,
    },
    860: { // tablets
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1068: { // desktops
      slidesPerView: 4,
      spaceBetween: 20,
    },
  }}
  speed={5000} // controls slideshow speed
  keyboard={{ enabled: true }}
>
  {frameworkSkills.map((skill, idx) => (
    <SwiperSlide key={idx}>
      <SkillCard name={skill.name} icon={skill.icon} />
    </SwiperSlide>
  ))}
</Swiper>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div
              className="p-6 rounded-xl border-blue-500/50 hover:border-blue-500/70 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              dark:border-white/10 border hover:-translate-y-1 transition-all"
            >
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 space-y-2">
                <li>
                  <strong> Intermediate and Matriculation CBSE </strong>
                  <br />
                  Neerja Modi School, Jaipur (2020)
                </li>
                <li>
                  <strong> Bachelor of Technology CSE </strong>
                  <br />
                  JK Lakshmipat University, Jaipur (2021-2025).
                </li>
              </ul>
            </div>
            <div
              className="p-6 rounded-xl border-blue-500/50 hover:border-blue-500/70 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
                dark:border-white/10 border hover:-translate-y-1 transition-all"
            >
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-500 dark:text-gray-400">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    FineOutput Technologies (Jaipur)
                    <br />
                    (2023){" "}
                  </h4>
                  <p>WebDeveloper/React Native Developer Intern.</p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Creative Clicks (Jaipur) <br /> (2025){" "}
                  </h4>
                  <p>MERN stack Intern.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
