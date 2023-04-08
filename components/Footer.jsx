import React from "react";
import Link from "next/link";
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>
        2023 Nada Store for Electronics Accessories & Supplies, All rights
        reserverd
      </p>
      <p className="icons">
        <Link href="https://github.com/N-ara" passHref>
          <AiFillGithub />
        </Link>
        <Link href="https://twitter.com/NadaAlSharqawy" passHref>
          <AiOutlineTwitter />
        </Link>
        <Link href="https://www.linkedin.com/in/nadaalsharqawy/" passHref>
          <AiFillLinkedin />
        </Link>
      </p>
    </div>
  );
};

export default Footer;
