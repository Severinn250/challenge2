import React from "react";
import styled from "styled-components";
import { RiHeart3Fill } from "react-icons/ri";

const Footer = () => {
  return (
    <FooterContainer>
      <p class="paragraph-primary">
        Coded with <RiHeart3Fill /> by &nbsp;
        <a
          href="https://github.com/Severinn250"
          rel="noreferrer"
          target="_blank"
          class="link"
        >
          Severin
        </a>
      </p>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  padding: 40px 0;
  text-align: center;
`;
