import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={
            "https://i.postimg.cc/mD6N6sBg/Whats-App-Image-2023-11-01-at-03-46-28-modified.png"
          }
          alt="Founder"
        />

        <h2>Abhishek Kushwaha</h2>
        <p>It is never too late to be what you might have been.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a
            href="https://youtube.com/@abhimaurya123?si=Bq1LS8FzOUhlmO4L"
            target={"blank"}
          >
            <AiFillYoutube />
          </a>
          <a
            href="https://instagram.com/abhimaurya5612?igshid=OGQ5ZDc2ODk2ZA=="
            target={"blank"}
          >
            <AiFillInstagram />
          </a>
          <a href="https://github.com/Abhishek11364" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
