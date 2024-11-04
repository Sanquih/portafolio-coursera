import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: sanquih01@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/Sanquih",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/santiago-quintero-hincapi%C3%A9-a25690218/",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const [isVisible, setIsVisible] = useState(true);
  const prevScrollY = useRef(0);
  useEffect(()=>{
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY.current) setIsVisible(false);
      else setIsVisible(true);
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={isVisible ? 'translateY(0)' : 'translateY(-200px)'}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex={1}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={10}>
              {socials.map((s) => <a key={s.url} href={s.url} target="_blank"><FontAwesomeIcon icon={s.icon} size="2x" /></a>)}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a key="contact-me" href="/serve/#contact-me" onClick={handleClick("contactme")}>Contacto</a>
              <a key="projects" href="/serve/#projects" onClick={handleClick("projects")}>Proyectos</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
