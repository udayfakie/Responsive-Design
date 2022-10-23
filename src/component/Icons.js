import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
// import { AiOutlineWhatsApp } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { GITHUB, LINKEDIN } from "../constant";
// import ReactWhatsapp from "react-whatsapp";


const Icons = () => {
  return (
    <Container>
    
      {/* <ChatReactWhatsapp number="+972547084239" message="Hello !!!" /> */}
      {/* <Chat>
      <AiOutlineWhatsApp/>
      </Chat> */}

      <Link target="_blank" href={LINKEDIN}>
        <BsLinkedin />
      </Link>
      <Link target="_blank" href={GITHUB}>
        <AiFillGithub />
      </Link>
      <MailNavLink to="/contact">
        <SiGmail />
      </MailNavLink>
    </Container>
  );
};

export default Icons;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
`;
const MailNavLink = styled(NavLink)`
  font-size: 45px;
  color:#3f5668;
`;

const Link = styled.a`
  padding: 10px;
  font-size: 37px;
  color:#3f5668;
`;

