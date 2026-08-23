import { motion } from "framer-motion";
import Contact from "./Contact";

function Hero() {
  return (
    <section
      id="about"
      className="
            max-w-6xl
            mx-auto
            px-6
            sm:px-8
            py-20
            md:py-24
            lg:py-28
        "
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.45,
        }}
        className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_260px] gap-14 lg:gap-20 items-end"
      >
        <div>
          <p className="eyebrow text-xs sm:text-sm text-[var(--muted)]">
            01 / Introduction
          </p>

          <div className="mt-8 md:mt-10">
            <h1
              className="
                      display-heading
                      text-[clamp(3.5rem,6vw,5rem)]
                      font-serif
                      text-[var(--ink)]
                  "
            >
              Hi, I'm
              <br />
              Xinyun Fan.
            </h1>

            <p
              className="
                      editorial-copy
                      mt-7
                      md:mt-8
                      text-lg
                      md:text-xl
                      text-[var(--muted)]
                      max-w-2xl
                  "
            >
              Computer Science student at City University of Hong Kong.
              <br />
              Exploring AI, Machine Learning, and Data Science.
            </p>
          </div>
        </div>

        <Contact />
      </motion.div>
    </section>
  );
}

export default Hero;
