import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="footer bg-dark py-3 mt-auto">
      <div class="container text-center">
        <span class="text-muted">
          Made by &copy;Amit Kumar Saw{" "}
          <a href="https://github.com/amitxfactor018">
            <FaGithub />
          </a>{" "}
          <a href="https://www.linkedin.com/in/amit-kumar-saw-263649158/">
            <FaLinkedin />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
