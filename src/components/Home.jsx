import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight } from "react-icons/bs";
const Home = () => {
  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };

  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am
            <br />
            Abhishek Kushwaha
          </motion.h1>
          <Typewriter
            options={{
              strings: ["A Frontend Developer"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />
          <div>
            <a href="mailto:abhimaurya5612@gmail.com">Hire Me</a>
            <a href="work">
              Project <BsArrowUpRight />
            </a>
          </div>
          <aside>
            <article>
              <p>
                + <span>5</span>
              </p>
              <spam>Projects</spam>
            </article>
            <article data-special>
              <p>Contact</p>
              <spam>abhimaurya5612@gmail.com</spam>
            </article>
          </aside>
        </div>
      </section>

      <section>
        <img
 src="https://i.postimg.cc/q7GSHgFv/Whats-App-Image-2023-11-01-at-08-58-08-removebg-preview.png"          alt=""
        />
      </section>
    </div>
  );
};

export default Home;
