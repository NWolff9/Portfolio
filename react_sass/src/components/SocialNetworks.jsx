import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa';

import "../styles/components/socialnetworks.sass";

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn />, href:'https://www.linkedin.com/in/natha-wolff/' },
    { name: "github", icon: <FaGithub />, href: 'https://github.com/NWolff9' },
    { name: "instagram", icon: <FaInstagram />, href: '#' },
  ];

const SocialNetworks = () => {
    
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.href} className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworks